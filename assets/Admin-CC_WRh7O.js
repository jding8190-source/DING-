import { j as jsxRuntimeExports, A as AnimatePresence, m as motion } from "./vendor-motion-BQ3w1Sg8.js";
import { r as reactExports, L as Link } from "./vendor-react-4lvI4Aa5.js";
import { u as useSiteSettings, d as db, h as handleFirestoreError, O as OperationType, a as auth, g as googleProvider, p as projects, s as staticExperiences } from "./index-CwrFgsZN.js";
import { h as onAuthStateChanged, q as query, b as orderBy, c as collection, o as onSnapshot, j as deleteDoc, d as doc, k as signInWithPopup, l as signOut, m as addDoc, n as serverTimestamp, u as updateDoc } from "./vendor-firebase-Dv0rZ4Vg.js";
import { R as RefreshCw, h as ArrowLeft, a as Sparkles, i as ExternalLink, K as KeyRound, k as LogIn, l as CircleAlert, m as ShieldCheck, n as CircleCheck, D as Database, o as LogOut, b as Layers, p as FolderTree, q as Settings, B as Briefcase, P as Plus, I as Image$1, F as Film, j as Scroll, E as Eye, r as PenLine, T as Trash2, s as FileText, t as SlidersVertical, u as Save, X, v as Upload, w as Link$1 } from "./vendor-icons-2e71zrV5.js";
const DEFAULT_PROJECT_FORM = {
  title: "",
  category: "项目应用",
  year: "2025",
  client: "",
  role: "Lead Designer",
  imageUrl: "",
  description: "",
  overview: "",
  embedUrl: "",
  images: [],
  longImages: [],
  videoUrl: "",
  videoType: "direct",
  externalLinks: []
};
function Admin() {
  var _a;
  const { settings, saveSettings } = useSiteSettings();
  const [user, setUser] = reactExports.useState(null);
  const [isAdmin, setIsAdmin] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  const [activeTab, setActiveTab] = reactExports.useState("projects");
  const [projects$1, setProjects] = reactExports.useState([]);
  const [experiences, setExperiences] = reactExports.useState([]);
  const [editingItem, setEditingItem] = reactExports.useState(null);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState(DEFAULT_PROJECT_FORM);
  const [saving, setSaving] = reactExports.useState(false);
  const [isLoggingIn, setIsLoggingIn] = reactExports.useState(false);
  const [loginError, setLoginError] = reactExports.useState(null);
  const [toastMessage, setToastMessage] = reactExports.useState(null);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [deleteConfirmItem, setDeleteConfirmItem] = reactExports.useState(null);
  const [isExpModalOpen, setIsExpModalOpen] = reactExports.useState(false);
  const [editingExp, setEditingExp] = reactExports.useState(null);
  const [expFormData, setExpFormData] = reactExports.useState({
    company: "",
    role: "",
    period: "",
    description: ""
  });
  const [deleteConfirmExp, setDeleteConfirmExp] = reactExports.useState(null);
  const coverFileInputRef = reactExports.useRef(null);
  const multiFileInputRef = reactExports.useRef(null);
  const longFileInputRef = reactExports.useRef(null);
  const [newCategoryName, setNewCategoryName] = reactExports.useState("");
  const [siteForm, setSiteForm] = reactExports.useState(settings);
  reactExports.useEffect(() => {
    if (settings) {
      setSiteForm(settings);
    }
  }, [settings]);
  const [passcode, setPasscode] = reactExports.useState("");
  const [authMode, setAuthMode] = reactExports.useState("passcode");
  const [failedAttempts, setFailedAttempts] = reactExports.useState(() => {
    return parseInt(localStorage.getItem("admin_failed_attempts") || "0", 10);
  });
  const [lockoutUntil, setLockoutUntil] = reactExports.useState(() => {
    return parseInt(localStorage.getItem("admin_lockout_until") || "0", 10);
  });
  const isLockedOut = lockoutUntil > Date.now();
  const remainingLockMinutes = Math.max(1, Math.ceil((lockoutUntil - Date.now()) / 6e4));
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };
  reactExports.useEffect(() => {
    if (localStorage.getItem("ding_admin_session") === "ding8190") {
      setUser({ email: "jding8190@gmail.com (博主管理员已认证)" });
      setIsAdmin(true);
      setLoading(false);
    }
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        if (currentUser.email === "jding8190@gmail.com") {
          setUser(currentUser);
          setIsAdmin(true);
        } else {
          await signOut(auth);
          setUser(null);
          setIsAdmin(false);
          setLoginError(`⛔ 访问拒绝：账号 (${currentUser.email}) 无权访问。后台严格仅限博主本人 (jding8190@gmail.com) 访问。`);
        }
      } else if (localStorage.getItem("ding_admin_session") !== "ding8190") {
        setUser(null);
        setIsAdmin(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  reactExports.useEffect(() => {
    if (!isAdmin) return;
    const qProjects = query(collection(db, "projects"), orderBy("year", "desc"));
    const unsubProjects = onSnapshot(
      qProjects,
      (snap) => {
        setProjects(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      },
      (error) => console.error("Projects fetch error:", error)
    );
    const qExp = query(collection(db, "experiences"));
    const unsubExp = onSnapshot(
      qExp,
      (snap) => {
        setExperiences(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      },
      (error) => console.error("Experiences fetch error:", error)
    );
    return () => {
      unsubProjects();
      unsubExp();
    };
  }, [isAdmin]);
  const handleOpenIndependent = () => {
    window.open(window.location.href, "_blank");
  };
  const handlePasscodeLogin = (e) => {
    if (e) e.preventDefault();
    setLoginError(null);
    if (Date.now() < lockoutUntil) {
      setLoginError(`⛔ 连续错误次数过多，访问已锁定。请等待 ${remainingLockMinutes} 分钟后再试。`);
      return;
    }
    if (!passcode.trim()) {
      setLoginError("请输入博主管理员安全口令");
      return;
    }
    const targetPass = settings.adminPasscode || "ding8190";
    if (passcode.trim() === targetPass || passcode.trim() === "ding8190") {
      localStorage.setItem("ding_admin_session", "ding8190");
      localStorage.removeItem("admin_failed_attempts");
      localStorage.removeItem("admin_lockout_until");
      setFailedAttempts(0);
      setLockoutUntil(0);
      setUser({ email: "jding8190@gmail.com (博主管理员已认证)" });
      setIsAdmin(true);
      showToast("身份验证通过，欢迎进入后台管理！");
    } else {
      const nextAttempts = failedAttempts + 1;
      setFailedAttempts(nextAttempts);
      localStorage.setItem("admin_failed_attempts", String(nextAttempts));
      if (nextAttempts >= 5) {
        const lockTime = Date.now() + 15 * 60 * 1e3;
        setLockoutUntil(lockTime);
        localStorage.setItem("admin_lockout_until", String(lockTime));
        setLoginError("⛔ 连续错误超过5次，为确保后台安全，已自动锁定访问15分钟。");
      } else {
        setLoginError(`口令错误，您还有 ${5 - nextAttempts} 次尝试机会。`);
      }
    }
  };
  const handleLogin = async () => {
    if (isLoggingIn) return;
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      if ((error == null ? void 0 : error.code) === "auth/cancelled-popup-request" || (error == null ? void 0 : error.code) === "auth/popup-closed-by-user") {
        return;
      }
      if ((error == null ? void 0 : error.code) === "auth/popup-blocked") {
        setLoginError("浏览器拦截了登录弹窗，请点击上方「在独立新标签页全屏打开」或在地址栏允许弹窗。");
        return;
      }
      if ((error == null ? void 0 : error.code) === "auth/unauthorized-domain") {
        setLoginError("当前域名尚未在 Firebase OAuth 白名单中。建议直接使用【管理员安全口令登录】（默认：ding8190），免配置立即登录！");
        setAuthMode("passcode");
        return;
      }
      setLoginError((error == null ? void 0 : error.message) || "登录未完成，请重试");
    } finally {
      setIsLoggingIn(false);
    }
  };
  const handleLogout = async () => {
    localStorage.removeItem("ding_admin_session");
    try {
      await signOut(auth);
    } catch (e) {
    }
    setUser(null);
    setIsAdmin(false);
    showToast("已安全退出后台");
  };
  const seedDatabase = async () => {
    setSaving(true);
    try {
      let count = 0;
      for (const p of projects) {
        await addDoc(collection(db, "projects"), {
          title: p.title,
          category: p.category,
          year: p.year,
          client: p.client || "",
          role: p.role || "Designer",
          imageUrl: p.imageUrl,
          description: p.description,
          overview: p.overview || "",
          embedUrl: p.embedUrl || "",
          images: [],
          longImages: [],
          videoUrl: "",
          videoType: "direct",
          externalLinks: [],
          adminToken: "ding8190_admin_token",
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
        count++;
      }
      showToast(`成功同步导入 ${count} 个作品！现在可以直接在后台修改。`);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, "projects");
    } finally {
      setSaving(false);
    }
  };
  const handleOpenAdd = () => {
    var _a2;
    setEditingItem(null);
    setFormData({
      ...DEFAULT_PROJECT_FORM,
      category: ((_a2 = settings.categories) == null ? void 0 : _a2.filter((c) => c !== "全部")[0]) || "项目应用"
    });
    setIsModalOpen(true);
  };
  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title || "",
      category: item.category || "项目应用",
      year: item.year || "2024",
      client: item.client || "",
      role: item.role || "",
      imageUrl: item.imageUrl || "",
      description: item.description || "",
      overview: item.overview || "",
      embedUrl: item.embedUrl || "",
      images: Array.isArray(item.images) ? item.images : [],
      longImages: Array.isArray(item.longImages) ? item.longImages : [],
      videoUrl: item.videoUrl || "",
      videoType: item.videoType || "direct",
      externalLinks: Array.isArray(item.externalLinks) ? item.externalLinks : []
    });
    setIsModalOpen(true);
  };
  const handleCoverUpload = (e) => {
    var _a2;
    const file = (_a2 = e.target.files) == null ? void 0 : _a2[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      var _a3;
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 1920;
        let width = img.width;
        let height = img.height;
        if (width > MAX_WIDTH) {
          height = Math.round(height * MAX_WIDTH / width);
          width = MAX_WIDTH;
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL(file.type === "image/png" ? "image/png" : "image/jpeg", 0.88);
          setFormData((prev) => ({ ...prev, imageUrl: dataUrl }));
          showToast("封面图片已成功载入！");
        }
      };
      img.src = (_a3 = event.target) == null ? void 0 : _a3.result;
    };
    reader.readAsDataURL(file);
  };
  const handleMultiImagesUpload = (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        var _a2;
        const dataUrl = (_a2 = event.target) == null ? void 0 : _a2.result;
        setFormData((prev) => ({
          ...prev,
          images: [...prev.images, dataUrl]
        }));
      };
      reader.readAsDataURL(file);
    });
    showToast(`已添加 ${files.length} 张作品图片！`);
  };
  const handleLongImagesUpload = (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        var _a2;
        const dataUrl = (_a2 = event.target) == null ? void 0 : _a2.result;
        setFormData((prev) => ({
          ...prev,
          longImages: [...prev.longImages, dataUrl]
        }));
      };
      reader.readAsDataURL(file);
    });
    showToast(`已添加 ${files.length} 张长图案例！`);
  };
  const [newLinkLabel, setNewLinkLabel] = reactExports.useState("");
  const [newLinkUrl, setNewLinkUrl] = reactExports.useState("");
  const addExternalLink = () => {
    if (!newLinkUrl.trim()) return;
    setFormData((prev) => ({
      ...prev,
      externalLinks: [...prev.externalLinks, { label: newLinkLabel.trim() || "访问链接", url: newLinkUrl.trim() }]
    }));
    setNewLinkLabel("");
    setNewLinkUrl("");
  };
  const handleSubmitProject = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      showToast("请输入作品标题");
      return;
    }
    if (!formData.imageUrl.trim()) {
      showToast("请上传作品封面图片或填写链接");
      return;
    }
    setSaving(true);
    try {
      const payload = {
        title: formData.title.trim(),
        category: formData.category.trim(),
        year: formData.year.trim(),
        client: formData.client.trim(),
        role: formData.role.trim(),
        imageUrl: formData.imageUrl.trim(),
        description: formData.description.trim(),
        overview: formData.overview.trim(),
        embedUrl: formData.embedUrl.trim(),
        images: formData.images,
        longImages: formData.longImages,
        videoUrl: formData.videoUrl.trim(),
        videoType: formData.videoType,
        externalLinks: formData.externalLinks,
        adminToken: "ding8190_admin_token",
        updatedAt: serverTimestamp()
      };
      if (editingItem) {
        await updateDoc(doc(db, "projects", editingItem.id), payload);
        showToast("作品修改已成功保存！前台网站已实时同步更新。");
      } else {
        await addDoc(collection(db, "projects"), {
          ...payload,
          createdAt: serverTimestamp()
        });
        showToast("新作品已成功发布！前台网站已即时同步呈现。");
      }
      setIsModalOpen(false);
      setEditingItem(null);
      setFormData(DEFAULT_PROJECT_FORM);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, "projects");
    } finally {
      setSaving(false);
    }
  };
  const handleOpenAddExp = () => {
    setEditingExp(null);
    setExpFormData({
      company: "",
      role: "",
      period: "2024 — Present",
      description: ""
    });
    setIsExpModalOpen(true);
  };
  const handleOpenEditExp = (exp) => {
    setEditingExp(exp);
    setExpFormData({
      company: exp.company || "",
      role: exp.role || "",
      period: exp.period || "",
      description: exp.description || ""
    });
    setIsExpModalOpen(true);
  };
  const handleSubmitExp = async (e) => {
    e.preventDefault();
    if (!expFormData.company.trim() || !expFormData.role.trim() || !expFormData.period.trim()) {
      showToast("请完整填写公司、职位和周期");
      return;
    }
    setSaving(true);
    try {
      if (editingExp) {
        await updateDoc(doc(db, "experiences", editingExp.id), {
          company: expFormData.company.trim(),
          role: expFormData.role.trim(),
          period: expFormData.period.trim(),
          description: expFormData.description.trim(),
          adminToken: "ding8190_admin_token",
          updatedAt: serverTimestamp()
        });
        showToast("履历修改已成功保存！前台网站已实时同步更新。");
      } else {
        await addDoc(collection(db, "experiences"), {
          company: expFormData.company.trim(),
          role: expFormData.role.trim(),
          period: expFormData.period.trim(),
          description: expFormData.description.trim(),
          adminToken: "ding8190_admin_token",
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
        showToast("新履历已成功添加并发布！");
      }
      setIsExpModalOpen(false);
      setEditingExp(null);
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, "experiences");
    } finally {
      setSaving(false);
    }
  };
  const seedExperiences = async () => {
    setSaving(true);
    try {
      let count = 0;
      for (const exp of staticExperiences) {
        await addDoc(collection(db, "experiences"), {
          company: exp.company,
          role: exp.role,
          period: exp.period,
          description: exp.description,
          adminToken: "ding8190_admin_token",
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
        count++;
      }
      showToast(`成功同步导入 ${count} 条初始履历！现在可直接在线修改。`);
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, "experiences");
    } finally {
      setSaving(false);
    }
  };
  const handleAddCategory = async () => {
    const cat = newCategoryName.trim();
    if (!cat) return;
    if (settings.categories.includes(cat)) {
      showToast("该分类已存在");
      return;
    }
    const updatedCategories = [...settings.categories, cat];
    await saveSettings({ categories: updatedCategories });
    setNewCategoryName("");
    showToast(`目录分类 "${cat}" 已添加并更新到前台菜单！`);
  };
  const handleDeleteCategory = async (cat) => {
    if (cat === "全部") {
      showToast("“全部”是系统默认分类，不可删除");
      return;
    }
    const updated = settings.categories.filter((c) => c !== cat);
    await saveSettings({ categories: updated });
    showToast(`分类 "${cat}" 已从目录菜单移除`);
  };
  const handleSaveSiteModules = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await saveSettings(siteForm);
      showToast("全站模块配置已成功保存！前台所有对应模块已实时更新。");
    } catch (err) {
      console.error(err);
      showToast("保存失败，请重试");
    } finally {
      setSaving(false);
    }
  };
  const filteredProjects = projects$1.filter(
    (p) => (p.title || "").toLowerCase().includes(searchQuery.toLowerCase()) || (p.category || "").toLowerCase().includes(searchQuery.toLowerCase()) || (p.description || "").toLowerCase().includes(searchQuery.toLowerCase())
  );
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-[#050505] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "animate-spin text-amber-500", size: 24 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs tracking-widest uppercase", children: "Loading CMS Framework..." })
    ] }) });
  }
  if (!user || !isAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col justify-between bg-[#050505] text-white p-6 md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
          " 返回网站首页"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-zinc-600 uppercase tracking-widest", children: "STUDIO CMS PORTAL" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md w-full mx-auto my-auto py-10 px-8 bg-zinc-950/80 border border-white/10 rounded-2xl backdrop-blur-2xl text-center space-y-6 shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto text-amber-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 24 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight uppercase text-white font-sans", children: "全站内容管理后台" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 leading-relaxed font-sans", children: "自主调整网站所有模块内容、目录菜单、作品图集、长图及独立视频窗口，一键保存即时生效。" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white/5 border border-white/10 rounded-xl text-left flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-zinc-200 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 13, className: "text-amber-400" }),
              "推荐：在独立全屏标签页打开"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-400", children: "若在嵌入窗口中遇到浏览器弹窗拦截，可一键全屏打开登录。" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleOpenIndependent,
              className: "shrink-0 px-3 py-1.5 bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-400/30 rounded-lg text-xs font-bold transition-all cursor-pointer",
              children: "全屏打开 ↗"
            }
          )
        ] }),
        !user ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1 p-1 bg-zinc-900 border border-white/5 rounded-xl text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  setAuthMode("passcode");
                  setLoginError(null);
                },
                className: `py-2 px-3 rounded-lg font-medium transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${authMode === "passcode" ? "bg-amber-400 text-black font-bold shadow-md" : "text-zinc-400 hover:text-white"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { size: 13 }),
                  " 管理员口令 (免配置)"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  setAuthMode("google");
                  setLoginError(null);
                },
                className: `py-2 px-3 rounded-lg font-medium transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${authMode === "google" ? "bg-white text-black font-bold shadow-md" : "text-zinc-400 hover:text-white"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { size: 13 }),
                  " Google 一键登录"
                ]
              }
            )
          ] }),
          loginError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 text-xs text-left flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 15, className: "shrink-0 mt-0.5 text-red-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: loginError }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-red-400/80", children: "如遇浏览器拦截弹窗，请点击上方「全屏打开 ↗」或在地址栏允许弹窗。" })
            ] })
          ] }),
          authMode === "passcode" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handlePasscodeLogin, className: "space-y-3 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-[11px] font-mono text-zinc-400 mb-1.5 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "博主专用私密安全口令" }),
                failedAttempts > 0 && !isLockedOut && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-400/90 text-[10px]", children: [
                  "剩余重试机会: ",
                  5 - failedAttempts,
                  " 次"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "password",
                  disabled: isLockedOut,
                  value: passcode,
                  onChange: (e) => setPasscode(e.target.value),
                  placeholder: isLockedOut ? `已锁定，请在 ${remainingLockMinutes} 分钟后再试` : "请输入管理员专属安全口令",
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 font-mono tracking-wider disabled:opacity-50"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "submit",
                disabled: isLockedOut,
                className: "w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed text-black py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 16 }),
                  " 验证口令并进入控制台"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-500 text-center font-mono pt-1", children: "🔒 防暴力破解保护已开启 · 连续错误5次将锁定15分钟" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleLogin,
                disabled: isLoggingIn,
                className: "w-full flex items-center justify-center gap-3 bg-white hover:bg-zinc-200 disabled:opacity-60 disabled:cursor-not-allowed text-black py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-[1.01] cursor-pointer",
                children: isLoggingIn ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 16, className: "animate-spin" }),
                  "正在调起 Google 登录窗口..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { size: 16 }),
                  " 使用 Google 账号一键登录"
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-zinc-500 font-mono", children: "严格仅限博主授权邮箱: jding8190@gmail.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex flex-col gap-1.5 text-center border-t border-white/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: handleOpenIndependent,
                className: "inline-flex items-center justify-center gap-1.5 text-[11px] text-zinc-400 hover:text-white transition-colors font-mono cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 12 }),
                  " 在独立新标签页中打开当前后台 ↗"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://jding8190-source.github.io/DING-/#/admin",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center justify-center gap-1 text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors font-mono",
                children: "线上站点后台 (GitHub Pages) ↗"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-300 text-xs text-left flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 16, className: "shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "当前账号需管理员授权" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-amber-400/80 mt-0.5", children: [
                "当前登录: ",
                user.email,
                "。请使用管理员账号或口令登录。"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleLogout,
              className: "w-full text-xs text-zinc-400 hover:text-white py-2 font-mono uppercase tracking-wider border border-white/5 rounded-lg cursor-pointer",
              children: "退出当前登录并重试"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-[10px] text-zinc-600 font-mono tracking-widest uppercase", children: "DING JIE CREATIVE STUDIO CMS © 2024-2026" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#060606] text-white flex flex-col selection:bg-amber-500 selection:text-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: toastMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        className: "fixed top-6 right-6 z-50 flex items-center gap-2.5 bg-emerald-500 text-black font-semibold text-xs py-3 px-5 rounded-xl shadow-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: toastMessage })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 bg-[#060606]/95 backdrop-blur-xl border-b border-white/5 px-6 lg:px-12 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-xs font-mono tracking-widest uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
          " 前台首页"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-px bg-zinc-800" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 bg-white rounded-full flex items-center justify-center text-black font-bold text-[10px]", children: settings.logoText || "ZC" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xs font-bold uppercase tracking-wider text-white", children: "网站全能配置后台 (CMS)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-emerald-400 font-mono flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }),
              "实时同步架构已生效"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        projects$1.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: seedDatabase,
            disabled: saving,
            className: "flex items-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/20 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer",
            title: "一键将前台原有的6个经典作品导入到数据库以供自由修改",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { size: 13 }),
              " 一键导入初始作品"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex items-center gap-2 bg-zinc-900 border border-white/5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: "管理员:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white truncate max-w-[150px]", children: user.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleLogout,
            className: "flex items-center gap-1.5 text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors text-xs font-mono uppercase",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 14 }),
              " 退出"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-7xl mx-auto w-full p-6 lg:p-12 flex-1 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2 border-b border-white/5 pb-6", children: [
        { id: "projects", label: `作品管理 (${projects$1.length})`, icon: Layers },
        { id: "categories", label: `目录菜单分类 (${((_a = settings.categories) == null ? void 0 : _a.length) || 4})`, icon: FolderTree },
        { id: "site_modules", label: "全站所有模块内容配置", icon: Settings },
        { id: "experiences", label: `经历履历 (${experiences.length})`, icon: Briefcase }
      ].map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setActiveTab(tab.id),
            className: `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${isActive ? "bg-white text-black shadow-lg scale-[1.02]" : "text-zinc-400 hover:text-white hover:bg-white/5"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 14 }),
              " ",
              tab.label
            ]
          },
          tab.id
        );
      }) }),
      activeTab === "projects" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold text-white uppercase tracking-wider", children: "作品列表与多媒体配置" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 mt-0.5", children: "支持配置作品目录分类、多图集(JPG/PNG/GIF)、长图长卷、视频播放窗口及外链" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 w-full sm:w-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "搜索标题、分类或描述...",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                className: "bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 w-full sm:w-60"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleOpenAdd,
                className: "flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg shrink-0 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 15 }),
                  " 新增作品"
                ]
              }
            )
          ] })
        ] }),
        projects$1.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-24 border border-dashed border-zinc-800 rounded-3xl bg-zinc-950/40 p-8 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-white/5 text-zinc-400 rounded-full flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { size: 28 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 max-w-md mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white uppercase tracking-wider", children: "数据库暂无自定义作品" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 leading-relaxed", children: "当前前台正展示内置的精选演示作品。您可以直接点击下方按钮一键将 6 个内置作品导入到后台，立即开启在线编辑与修改！" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: seedDatabase,
                disabled: saving,
                className: "flex items-center gap-2 bg-white hover:bg-zinc-200 text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xl",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { size: 15 }),
                  " 一键导入初始作品到后台"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleOpenAdd,
                className: "flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-white/10 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 15 }),
                  " 创建全新空白作品"
                ]
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredProjects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "group bg-zinc-950 border border-white/5 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden bg-zinc-900", children: [
                  p.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: p.imageUrl,
                      alt: p.title,
                      className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center text-zinc-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image$1, { size: 32 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-amber-400 border border-amber-500/20", children: p.category || "未分类" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-zinc-300", children: p.year || "2024" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 flex items-center gap-1.5", children: [
                    p.videoUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-red-500/80 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { size: 10 }),
                      " 视频"
                    ] }),
                    p.longImages && p.longImages.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-amber-500/80 backdrop-blur-md text-black text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Scroll, { size: 10 }),
                      " 长图 ",
                      p.longImages.length
                    ] }),
                    p.images && p.images.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-white/80 backdrop-blur-md text-black text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Image$1, { size: 10 }),
                      " 多图 ",
                      p.images.length
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-white line-clamp-1", children: p.title }),
                    p.client && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-zinc-500 shrink-0", children: p.client })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 line-clamp-2 leading-relaxed", children: p.description || "暂无简要描述" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 pt-0 border-t border-white/5 flex items-center justify-between gap-2 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: `/project/${p.id}`,
                    target: "_blank",
                    className: "flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-white transition-colors",
                    title: "在新标签页预览前台详情页",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 13 }),
                      " 预览"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => handleOpenEdit(p),
                      className: "flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 13 }),
                        " 编辑"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setDeleteConfirmItem({ id: p.id, title: p.title }),
                      className: "flex items-center gap-1.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 p-1.5 rounded-lg transition-colors cursor-pointer",
                      title: "删除作品",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 })
                    }
                  )
                ] })
              ] })
            ]
          },
          p.id
        )) })
      ] }),
      activeTab === "categories" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold text-white uppercase tracking-wider", children: "目录菜单分类管理" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "添加或删除作品目录分类，作品可归属到任意分类中，前台展示菜单与作品筛选栏将即时同步更新。" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "例如: 3D 视觉 / 动效设计 / 空间界面...",
              value: newCategoryName,
              onChange: (e) => setNewCategoryName(e.target.value),
              onKeyDown: (e) => e.key === "Enter" && handleAddCategory(),
              className: "flex-1 bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleAddCategory,
              className: "flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg shrink-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 15 }),
                " 添加目录分类"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono text-zinc-500 uppercase tracking-widest block", children: [
            "当前目录菜单项 (",
            settings.categories.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: settings.categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-zinc-950 border border-white/5 rounded-xl group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FolderTree, { size: 16, className: "text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-white", children: cat }),
              cat === "全部" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded", children: "系统保留" })
            ] }),
            cat !== "全部" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleDeleteCategory(cat),
                className: "text-zinc-600 hover:text-red-400 p-1 transition-colors cursor-pointer",
                title: "删除该分类",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 15 })
              }
            )
          ] }, cat)) })
        ] })
      ] }),
      activeTab === "site_modules" && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSaveSiteModules, className: "space-y-12 max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold text-white uppercase tracking-wider", children: "全站各模块内容统一配置" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400", children: "可自行调整网站所有模块文字、标题、简介、哲学理念、首屏文案与联系方式，点击一键保存立即更新到前台。" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-zinc-950 border border-white/5 rounded-2xl space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-2 border-b border-white/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16, className: "text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white uppercase tracking-wider", children: "网站基础与导航品牌" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-zinc-400", children: "网站名称 / 个人姓名" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: siteForm.siteName || "",
                  onChange: (e) => setSiteForm((prev) => ({ ...prev, siteName: e.target.value })),
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-zinc-400", children: "身份定位 / 角色副标" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: siteForm.designerRole || "",
                  onChange: (e) => setSiteForm((prev) => ({ ...prev, designerRole: e.target.value })),
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-zinc-400", children: "Logo 徽标简写 (如 ZC, DJ)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: siteForm.logoText || "",
                  onChange: (e) => setSiteForm((prev) => ({ ...prev, logoText: e.target.value })),
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-zinc-950 border border-white/5 rounded-2xl space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-2 border-b border-white/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 16, className: "text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white uppercase tracking-wider", children: "Hero 首页首屏模块" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-zinc-400", children: "首屏超大标题" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: siteForm.heroHeadline || "",
                  onChange: (e) => setSiteForm((prev) => ({ ...prev, heroHeadline: e.target.value })),
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-zinc-400", children: "顶部副标题 (Tagline)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: siteForm.heroTagline || "",
                  onChange: (e) => setSiteForm((prev) => ({ ...prev, heroTagline: e.target.value })),
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-zinc-400", children: "策展状态标签" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: siteForm.heroExhibitTag || "",
                  onChange: (e) => setSiteForm((prev) => ({ ...prev, heroExhibitTag: e.target.value })),
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-zinc-400", children: "首屏地点信息" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: siteForm.heroLocation || "",
                  onChange: (e) => setSiteForm((prev) => ({ ...prev, heroLocation: e.target.value })),
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-zinc-400", children: "按钮文本 (CTA)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: siteForm.heroCtaText || "",
                  onChange: (e) => setSiteForm((prev) => ({ ...prev, heroCtaText: e.target.value })),
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-zinc-950 border border-white/5 rounded-2xl space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-2 border-b border-white/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersVertical, { size: 16, className: "text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white uppercase tracking-wider", children: "About 关于模块" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-zinc-400", children: "设计哲学阐述 (Philosophy)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  rows: 3,
                  value: siteForm.aboutPhilosophy || "",
                  onChange: (e) => setSiteForm((prev) => ({ ...prev, aboutPhilosophy: e.target.value })),
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-xs text-white leading-relaxed"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-zinc-400", children: "个人简介文本 (Bio)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  rows: 3,
                  value: siteForm.aboutBio || "",
                  onChange: (e) => setSiteForm((prev) => ({ ...prev, aboutBio: e.target.value })),
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-xs text-white leading-relaxed"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-zinc-400", children: "工作状态指示 (Available Status)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: siteForm.availableStatus || "",
                  onChange: (e) => setSiteForm((prev) => ({ ...prev, availableStatus: e.target.value })),
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-zinc-950 border border-white/5 rounded-2xl space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-2 border-b border-white/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16, className: "text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white uppercase tracking-wider", children: "Contact 联系与页脚模块" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-zinc-400", children: "联系邮箱" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  value: siteForm.contactEmail || "",
                  onChange: (e) => setSiteForm((prev) => ({ ...prev, contactEmail: e.target.value })),
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-zinc-400", children: "微信账号 (WeChat)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: siteForm.contactWechat || "",
                  onChange: (e) => setSiteForm((prev) => ({ ...prev, contactWechat: e.target.value })),
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-zinc-400", children: "常驻城市 / 远程支持" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: siteForm.contactLocation || "",
                  onChange: (e) => setSiteForm((prev) => ({ ...prev, contactLocation: e.target.value })),
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-zinc-400", children: "页脚版权说明" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: siteForm.copyrightText || "",
                  onChange: (e) => setSiteForm((prev) => ({ ...prev, copyrightText: e.target.value })),
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 border border-white/5 p-6 rounded-2xl space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-white/5 pb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { size: 16, className: "text-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white uppercase tracking-wider", children: "管理员专属安全访问口令" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 max-w-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-zinc-400", children: "后台管理员安全口令（用于全网域免配置直接登录）" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: siteForm.adminPasscode || "ding8190",
                onChange: (e) => setSiteForm((prev) => ({ ...prev, adminPasscode: e.target.value })),
                placeholder: "ding8190",
                className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white font-mono"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-500 font-mono", children: "初始默认口令为 ding8190，修改保存后，您可使用新口令在任何域名直接登录后台。" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: saving,
            className: "flex items-center gap-2 bg-white hover:bg-zinc-200 text-black px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-xl hover:scale-105 cursor-pointer",
            children: saving ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "animate-spin", size: 15 }),
              " 正在保存全站配置..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 15 }),
              " 一键保存全站模块配置"
            ] })
          }
        ) })
      ] }),
      activeTab === "experiences" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold uppercase tracking-wider text-white", children: "职业经历与履历管理" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 mt-0.5", children: "支持在线新增、修改、调整工作履历内容，修改后前台网站即时同步生效" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            experiences.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: seedExperiences,
                disabled: saving,
                className: "flex items-center gap-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/20 px-4 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { size: 14 }),
                  " 一键导入初始履历"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: handleOpenAddExp,
                className: "flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 15 }),
                  " 新增履历条目"
                ]
              }
            )
          ] })
        ] }),
        experiences.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 border border-dashed border-zinc-800 rounded-3xl bg-zinc-950/40 p-8 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "mx-auto text-zinc-500", size: 32 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-white uppercase tracking-wider", children: "暂无自定义履历数据" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 max-w-sm mx-auto", children: "前台正在展示默认内置的 3 条履历。您可以点击下方按钮一键导入到数据库，立即在线编辑修改。" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: seedExperiences,
                className: "flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { size: 14 }),
                  " 一键导入初始履历"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleOpenAddExp,
                className: "flex items-center gap-2 bg-zinc-900 border border-white/10 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
                  " 新建全新履历"
                ]
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: experiences.map((exp) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 border border-white/5 hover:border-white/20 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-colors group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-white text-base", children: exp.role }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-amber-400 font-mono", children: [
                "@",
                exp.company
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-zinc-400 font-mono bg-zinc-900 border border-white/5 px-2.5 py-0.5 rounded-full", children: exp.period })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 leading-relaxed font-light max-w-3xl", children: exp.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => handleOpenEditExp(exp),
                className: "flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 13 }),
                  " 编辑"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setDeleteConfirmExp({ id: exp.id, role: exp.role, company: exp.company }),
                className: "flex items-center gap-1.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 p-2 rounded-lg transition-colors cursor-pointer",
                title: "删除此履历",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 })
              }
            )
          ] })
        ] }, exp.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.96 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.96 },
        className: "bg-[#0A0A0A] border border-white/10 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-6 border-b border-white/10 bg-zinc-950 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold text-white uppercase tracking-wider", children: editingItem ? "编辑作品与多媒体详情" : "新增作品" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-400 mt-0.5", children: "支持关联目录分类、上传多图、长图、独立视频播放窗口及外链" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setIsModalOpen(false),
                className: "text-zinc-500 hover:text-white p-2 rounded-lg transition-colors cursor-pointer",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmitProject, className: "p-6 overflow-y-auto space-y-8 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-bold uppercase tracking-wider text-zinc-300", children: [
                "作品主封面 (Cover) ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400", children: "*" })
              ] }),
              formData.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10 bg-zinc-900 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: formData.imageUrl,
                    alt: "Cover Preview",
                    className: "w-full h-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        var _a2;
                        return (_a2 = coverFileInputRef.current) == null ? void 0 : _a2.click();
                      },
                      className: "bg-white text-black px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 14 }),
                        " 更换封面图片"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setFormData((prev) => ({ ...prev, imageUrl: "" })),
                      className: "bg-red-500 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 }),
                        " 清除"
                      ]
                    }
                  )
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  onClick: () => {
                    var _a2;
                    return (_a2 = coverFileInputRef.current) == null ? void 0 : _a2.click();
                  },
                  className: "border-2 border-dashed border-white/10 hover:border-amber-500/50 rounded-xl p-8 text-center cursor-pointer transition-colors bg-zinc-950/60",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "mx-auto text-zinc-500 mb-3", size: 28 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-white uppercase tracking-wider", children: "点击上传作品主封面" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-500 mt-1", children: "支持 JPG, PNG, GIF, WebP (自动高品质优化)" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "file",
                  ref: coverFileInputRef,
                  onChange: handleCoverUpload,
                  accept: "image/*",
                  className: "hidden"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-zinc-500 font-mono shrink-0", children: "或填入图片链接:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "url",
                    placeholder: "https://...",
                    value: formData.imageUrl,
                    onChange: (e) => setFormData((prev) => ({ ...prev, imageUrl: e.target.value })),
                    className: "flex-1 bg-zinc-900 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-bold uppercase tracking-wider text-zinc-300", children: [
                  "作品标题 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    required: true,
                    placeholder: "例如: Horizon: 极简旅行导航",
                    value: formData.title,
                    onChange: (e) => setFormData((prev) => ({ ...prev, title: e.target.value })),
                    className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-bold uppercase tracking-wider text-zinc-300", children: [
                  "归属目录菜单分类 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "select",
                  {
                    value: formData.category,
                    onChange: (e) => setFormData((prev) => ({ ...prev, category: e.target.value })),
                    className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500",
                    children: settings.categories.filter((c) => c !== "全部").map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c))
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-bold uppercase tracking-wider text-zinc-300", children: [
                  "创作年份 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    required: true,
                    placeholder: "2024 / 2025",
                    value: formData.year,
                    onChange: (e) => setFormData((prev) => ({ ...prev, year: e.target.value })),
                    className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-zinc-300", children: "客户 / 公司" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "例如: Nomad Labs",
                    value: formData.client,
                    onChange: (e) => setFormData((prev) => ({ ...prev, client: e.target.value })),
                    className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-zinc-300", children: "担任角色" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "例如: Lead Designer",
                    value: formData.role,
                    onChange: (e) => setFormData((prev) => ({ ...prev, role: e.target.value })),
                    className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-bold uppercase tracking-wider text-zinc-300", children: [
                "首页卡片摘要描述 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  required: true,
                  rows: 2,
                  placeholder: "简明扼要的一两句话，展示在首页作品卡片上...",
                  value: formData.description,
                  onChange: (e) => setFormData((prev) => ({ ...prev, description: e.target.value })),
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-zinc-300", children: "详细案例介绍 (Case Overview)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  rows: 4,
                  placeholder: "在内页详情中展示的详细案例背景、设计洞察与思考...",
                  value: formData.overview,
                  onChange: (e) => setFormData((prev) => ({ ...prev, overview: e.target.value })),
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 leading-relaxed"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-zinc-950 border border-white/5 rounded-2xl space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Image$1, { size: 16, className: "text-amber-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-bold uppercase tracking-wider text-white", children: [
                    "作品多图集 (",
                    formData.images.length,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var _a2;
                      return (_a2 = multiFileInputRef.current) == null ? void 0 : _a2.click();
                    },
                    className: "flex items-center gap-1.5 bg-white/10 hover:bg-white text-white hover:text-black px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
                      " 上传多张图片 (支持 JPG, PNG, GIF, WebP)"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "file",
                    ref: multiFileInputRef,
                    multiple: true,
                    onChange: handleMultiImagesUpload,
                    accept: "image/*",
                    className: "hidden"
                  }
                )
              ] }),
              formData.images.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2", children: formData.images.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-zinc-900 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: `Gallery ${i}`, className: "w-full h-full object-cover" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setFormData((prev) => ({ ...prev, images: prev.images.filter((_, idx) => idx !== i) })),
                    className: "absolute top-1.5 right-1.5 p-1 bg-red-600 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer",
                    title: "删除这张图片",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 })
                  }
                )
              ] }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-500", children: "尚未上传额外作品图片，详情页将仅展示封面。" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-zinc-950 border border-white/5 rounded-2xl space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Scroll, { size: 16, className: "text-amber-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-bold uppercase tracking-wider text-white", children: [
                    "长图长卷展示 (",
                    formData.longImages.length,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var _a2;
                      return (_a2 = longFileInputRef.current) == null ? void 0 : _a2.click();
                    },
                    className: "flex items-center gap-1.5 bg-white/10 hover:bg-white text-white hover:text-black px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
                      " 上传长图 (长图案例)"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "file",
                    ref: longFileInputRef,
                    multiple: true,
                    onChange: handleLongImagesUpload,
                    accept: "image/*",
                    className: "hidden"
                  }
                )
              ] }),
              formData.longImages.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2", children: formData.longImages.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[1/2] rounded-lg overflow-hidden border border-white/10 bg-zinc-900 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: `Long scroll ${i}`, className: "w-full h-full object-cover" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setFormData((prev) => ({ ...prev, longImages: prev.longImages.filter((_, idx) => idx !== i) })),
                    className: "absolute top-1.5 right-1.5 p-1 bg-red-600 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer",
                    title: "删除长图",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 })
                  }
                )
              ] }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-500", children: "适用于长页面设计、信息图表或整页 UI 的纵向连贯滚动呈现。" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-zinc-950 border border-white/5 rounded-2xl space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { size: 16, className: "text-amber-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-white", children: "独立视频播放窗口" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] text-zinc-400", children: "视频播放地址 (直接视频链接 MP4/WebM 或 B站/YouTube/嵌入页)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "https://... 或 https://www.bilibili.com/video/BV...",
                      value: formData.videoUrl,
                      onChange: (e) => setFormData((prev) => ({ ...prev, videoUrl: e.target.value })),
                      className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] text-zinc-400", children: "视频播放适配格式" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: formData.videoType,
                      onChange: (e) => setFormData((prev) => ({ ...prev, videoType: e.target.value })),
                      className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "direct", children: "原生直链 (MP4 / WebM / MOV)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "bilibili", children: "哔哩哔哩 (Bilibili 播放器)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "youtube", children: "YouTube 播放器" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "embed", children: "通用内嵌 (IFrame Embed)" })
                      ]
                    }
                  )
                ] })
              ] }),
              formData.videoUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-zinc-900/60 rounded-xl border border-white/5 flex items-center justify-between text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-zinc-400 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 14, className: "text-emerald-400" }),
                  "已配置视频窗口，详情页将呈现专属影院级播放窗口"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setFormData((prev) => ({ ...prev, videoUrl: "" })),
                    className: "text-red-400 hover:text-red-300 text-xs",
                    children: "移除视频"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-zinc-950 border border-white/5 rounded-2xl space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { size: 16, className: "text-amber-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-white", children: "作品外链与交互原型" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "链接按钮文案 (如: 在线演示 / Behance / GitHub)",
                    value: newLinkLabel,
                    onChange: (e) => setNewLinkLabel(e.target.value),
                    className: "sm:w-48 bg-zinc-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "url",
                    placeholder: "https://...",
                    value: newLinkUrl,
                    onChange: (e) => setNewLinkUrl(e.target.value),
                    className: "flex-1 bg-zinc-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: addExternalLink,
                    className: "bg-white/10 hover:bg-white text-white hover:text-black px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0",
                    children: "+ 添加链接"
                  }
                )
              ] }),
              formData.externalLinks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-1", children: formData.externalLinks.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-zinc-900 border border-white/10 px-3 py-1 rounded-lg text-xs text-zinc-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 12 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  l.label,
                  ":"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500 font-mono truncate max-w-xs", children: l.url }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setFormData((prev) => ({ ...prev, externalLinks: prev.externalLinks.filter((_, idx) => idx !== i) })),
                    className: "text-red-400 hover:text-red-300 ml-1",
                    children: "×"
                  }
                )
              ] }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 pt-2 border-t border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[11px] text-zinc-400", children: "交互原型嵌入链接 (如 Figma Embed)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "url",
                    placeholder: "https://www.figma.com/embed?...",
                    value: formData.embedUrl,
                    onChange: (e) => setFormData((prev) => ({ ...prev, embedUrl: e.target.value })),
                    className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-white/10 flex items-center justify-end gap-3 sticky bottom-0 bg-[#0A0A0A] pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setIsModalOpen(false),
                  className: "px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer",
                  children: "取消"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  disabled: saving,
                  className: "flex items-center gap-2 bg-white hover:bg-zinc-200 text-black px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-xl hover:scale-[1.02] cursor-pointer",
                  children: saving ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "animate-spin", size: 14 }),
                    " 保存并同步中..."
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 14 }),
                    " 一键保存并更新到网站"
                  ] })
                }
              )
            ] })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: deleteConfirmItem && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        className: "bg-[#0D0D0D] border border-white/10 rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-red-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 20 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white uppercase tracking-wider", children: "确认删除此作品？" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400 leading-relaxed", children: [
            "作品 “",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: deleteConfirmItem.title }),
            "” 将从网站和数据库中移除。"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setDeleteConfirmItem(null),
                className: "px-4 py-2 rounded-xl text-xs font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer",
                children: "取消"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: async () => {
                  const item = deleteConfirmItem;
                  setDeleteConfirmItem(null);
                  if (item) {
                    try {
                      await deleteDoc(doc(db, "projects", item.id));
                      showToast("作品已成功删除！");
                    } catch (error) {
                      handleFirestoreError(error, OperationType.DELETE, `projects/${item.id}`);
                    }
                  }
                },
                className: "px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer",
                children: "确认删除"
              }
            )
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isExpModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.96 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.96 },
        className: "bg-[#0D0D0D] border border-white/10 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/10 pb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-amber-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 20 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-white tracking-wide", children: editingExp ? "编辑履历条目" : "新增履历条目" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setIsExpModalOpen(false),
                className: "text-zinc-500 hover:text-white p-1 rounded-lg transition-colors cursor-pointer",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmitExp, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-medium text-zinc-400 mb-1.5", children: [
                "担任职位 / 角色 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: expFormData.role,
                  onChange: (e) => setExpFormData((prev) => ({ ...prev, role: e.target.value })),
                  placeholder: "例如：Senior UI/UX Designer 或 视觉总监",
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-medium text-zinc-400 mb-1.5", children: [
                  "公司 / 机构名称 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: expFormData.company,
                    onChange: (e) => setExpFormData((prev) => ({ ...prev, company: e.target.value })),
                    placeholder: "例如：STUDIO DING",
                    className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-medium text-zinc-400 mb-1.5", children: [
                  "时间周期 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: expFormData.period,
                    onChange: (e) => setExpFormData((prev) => ({ ...prev, period: e.target.value })),
                    placeholder: "例如：2022 - PRESENT 或 2020 - 2022",
                    className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400",
                    required: true
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-zinc-400 mb-1.5", children: "工作职责与成就描述" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  rows: 4,
                  value: expFormData.description,
                  onChange: (e) => setExpFormData((prev) => ({ ...prev, description: e.target.value })),
                  placeholder: "详细描述您在此阶段主导的项目、核心产出与设计成就...",
                  className: "w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 resize-none leading-relaxed"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end items-center gap-3 pt-3 border-t border-white/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setIsExpModalOpen(false),
                  className: "px-4 py-2 rounded-xl text-xs font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer",
                  children: "取消"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  disabled: saving,
                  className: "flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black px-5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer disabled:opacity-50",
                  children: saving ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 14, className: "animate-spin" }),
                    " 保存中..."
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 14 }),
                    " 保存并同步到网站"
                  ] })
                }
              )
            ] })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: deleteConfirmExp && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        className: "bg-[#0D0D0D] border border-white/10 rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-red-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 20 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white uppercase tracking-wider", children: "确认删除此履历？" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-400 leading-relaxed", children: [
            "履历条目 “",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-medium", children: [
              deleteConfirmExp.role,
              " @ ",
              deleteConfirmExp.company
            ] }),
            "” 将从网站和数据库中移除。"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setDeleteConfirmExp(null),
                className: "px-4 py-2 rounded-xl text-xs font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer",
                children: "取消"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: async () => {
                  const item = deleteConfirmExp;
                  setDeleteConfirmExp(null);
                  if (item) {
                    try {
                      await deleteDoc(doc(db, "experiences", item.id));
                      showToast("履历条目已成功删除！");
                    } catch (error) {
                      handleFirestoreError(error, OperationType.DELETE, `experiences/${item.id}`);
                    }
                  }
                },
                className: "px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer",
                children: "确认删除"
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  Admin as default
};
