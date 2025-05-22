import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Menu, X, LogOut, MessageSquare, Users, BookOpen, Film, GraduationCap, Info, Star, Layers } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [searchContact, setSearchContact] = useState("");
  const [sortOption, setSortOption] = useState("latest");
  const [openMessageId, setOpenMessageId] = useState(null);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");

  const [modules, setModules] = useState([]);
  const [moduleFilter, setModuleFilter] = useState("all"); 
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [showModuleForm, setShowModuleForm] = useState(false);
  const [moduleForm, setModuleForm] = useState({
    title: "",
    subtitle: "",
    objective: "",
    description: "",
    icon: "",
    color: "",
    topics: "",
    outcomes: "",
    quote: "",
    isFeatured: false,
  });

  const [editingModuleId, setEditingModuleId] = useState(null);
  const [programInfos, setProgramInfos] = useState([]);
  const [programInfoForm, setProgramInfoForm] = useState({
    duration: "",
    format: "",
    tuition: "",
    certification: "",
    scholarshipInfo: "",
    startDates: [{ startDate: "", applicationDeadline: "" }],
  });
  const [editingProgramInfoId, setEditingProgramInfoId] = useState(null);

  const [facultyMembers, setFacultyMembers] = useState([]);
  const [facultyForm, setFacultyForm] = useState({
    name: "",
    role: "",
    specialty: "",
    img: null,
  });
  const [editingFacultyId, setEditingFacultyId] = useState(null);
  const [facultyPreviewImg, setFacultyPreviewImg] = useState(null);
  const [showFacultyForm, setShowFacultyForm] = useState(false);
  const [facultyIsLocalPreview, setFacultyIsLocalPreview] = useState(false);

  const [teamMembers, setTeamMembers] = useState([]);
  const [teamForm, setTeamForm] = useState({
    name: "",
    role: "",
    image: null,
  });
  const [editingTeamId, setEditingTeamId] = useState(null);
  const [teamPreviewImg, setTeamPreviewImg] = useState(null);
  const [showTeamForm, setShowTeamForm] = useState(false);
  const [teamIsLocalPreview, setTeamIsLocalPreview] = useState(false);

  const [faqs, setFaqs] = useState([]);
  const [showFaqForm, setShowFaqForm] = useState(false);
  const [openFaqId, setOpenFaqId] = useState(null);
  const [faqForm, setFaqForm] = useState({
    question: "",
    answer: "",
  });
  const [editingFaqId, setEditingFaqId] = useState(null);

  const [testimonials, setTestimonials] = useState([]);
  const [showTestimonialForm, setShowTestimonialForm] = useState(false);
  const [openTestimonialId, setOpenTestimonialId] = useState(null);
  const [testimonialForm, setTestimonialForm] = useState({
    img: null,
    name: "",
    desc: "",
    role: "",
    stars: "",
  });
  const [editingTestimonialId, setEditingTestimonialId] = useState(null);
  const [testimonialPreviewImg, setTestimonialPreviewImg] = useState(null);
  const [testimonialIsLocalPreview, setTestimonialIsLocalPreview] = useState(false);

  const navigate = useNavigate();
  const BASE_URL = "http://localhost:5000";




  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/adminLogin");
    toast.info("Logged out successfully");
  };





  // Fetch contact messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/contact`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setMessages(res.data);
      } catch (err) {
        console.error("Failed to fetch contact messages:", err);
        toast.error("Failed to fetch contact messages");
      }
    };
    fetchMessages();
  }, [BASE_URL]);


  // Fetch program modules based on filter
  useEffect(() => {
    const fetchModules = async () => {
      try {
        const endpoint = moduleFilter === "featured" 
          ? `${BASE_URL}/api/programModule/featured`
          : `${BASE_URL}/api/programModule`;
        const res = await axios.get(endpoint, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setModules(res.data);
      } catch (err) {
        console.error("Failed to fetch modules:", err);
        toast.error("Failed to fetch program modules");
      }
    };
    fetchModules();
  }, [BASE_URL, moduleFilter]);

    
  // Fetch program info
  useEffect(() => {
    const fetchProgramInfos = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/programInfo`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setProgramInfos(res.data);
      } catch (err) {
        toast.error("Failed to fetch program info");
      }
    };
    fetchProgramInfos();
  }, [BASE_URL]);

  // Fetch faculty members
  useEffect(() => {
    const fetchFacultyMembers = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/faculty`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setFacultyMembers(res.data);
      } catch (err) {
        console.error("Failed to fetch faculty members:", err);
        toast.error("Failed to fetch faculty members");
      }
    };
    fetchFacultyMembers();
  }, [BASE_URL]);

  // Fetch team members
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/team`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setTeamMembers(res.data);
      } catch (err) {
        console.error("Failed to fetch team members:", err);
        toast.error("Failed to fetch team members");
      }
    };
    fetchTeamMembers();
  }, [BASE_URL]);

  // Fetch FAQs
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/faqs`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setFaqs(res.data);
      } catch (err) {
        console.error("Failed to fetch FAQs:", err);
        toast.error("Failed to fetch FAQs");
      }
    };
    fetchFaqs();
  }, [BASE_URL]);

  // Fetch testimonials
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/testimonials`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setTestimonials(res.data);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
        toast.error("Failed to fetch testimonials");
      }
    };
    fetchTestimonials();
  }, [BASE_URL]);



  // CRUD Functionalities Sections

  const handleMarkAsRead = async (id) => {
    try {
      await axios.put(
        `${BASE_URL}/api/contact/${id}/read`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setMessages((prev) =>
        prev.map((msg) => (msg._id === id ? { ...msg, isRead: true } : msg))
      );
      toast.success("Message marked as read");
    } catch (err) {
      console.error("Failed to mark as read:", err);
      toast.error("Failed to mark message as read");
    }
  };

  const handleDelete = async (id) => {
   Swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${BASE_URL}/api/contact/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          });
          setMessages((prev) => prev.filter((msg) => msg._id !== id));
          toast.success("Message deleted");
        } catch (err) {
          console.error("Failed to delete message:", err);
          toast.error("Failed to delete message");
        }
      }
    });
  };

  // CRUD for Program Modules
  const handleModuleSubmit = async (e) => {
    e.preventDefault();
    const moduleData = {
      title: moduleForm.title,
      subtitle: moduleForm.subtitle,
      objective: moduleForm.objective,
      description: moduleForm.description,
      icon: moduleForm.icon,
      color: moduleForm.color,
      topics: moduleForm.topics.split("\n").filter((item) => item.trim()),
      outcomes: moduleForm.outcomes.split("\n").filter((item) => item.trim()),
      quote: moduleForm.quote,
      isFeatured: moduleForm.isFeatured,
    };

    try {
      if (editingModuleId) {
        const res = await axios.put(
          `${BASE_URL}/api/programModule/${editingModuleId}`,
          moduleData,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          }
        );
        setModules((prev) =>
          prev.map((mod) => (mod._id === editingModuleId ? res.data : mod))
        );
        toast.success("Module updated");
      } else {
        const res = await axios.post(`${BASE_URL}/api/programModule`, moduleData, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setModules((prev) => [res.data, ...prev]);
        setModuleFilter("all");
        toast.success("Module created");
      }
      setModuleForm({
        title: "",
        subtitle: "",
        objective: "",
        description: "",
        icon: "",
        color: "",
        topics: "",
        outcomes: "",
        quote: "",
        isFeatured: false,
      });
      setEditingModuleId(null);
    } catch (err) {
      console.error("Failed to save module:", err);
      toast.error("Failed to save module: " + (err.response?.data?.error || "Only 3 featured modules are allowed!!"));
    }
  };

  const handleModuleEdit = (module) => {
    setModuleForm({
      title: module.title,
      subtitle: module.subtitle,
      objective: module.objective,
      description: module.description,
      icon: module.icon,
      color: module.color,
      topics: module.topics.join("\n"),
      outcomes: module.outcomes.join("\n"),
      quote: module.quote,
      isFeatured: module.isFeatured,
    });
    setEditingModuleId(module._id);
  };

  const handleModuleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${BASE_URL}/api/programModule/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          });
          setModules((prev) => prev.filter((mod) => mod._id !== id));
          toast.success("Module deleted");
        } catch (err) {
          console.error("Failed to delete module:", err);
          toast.error("Failed to delete module");
        }
      }
    });
  };

  const handleModuleInputChange = (e) => {
    const { name, value } = e.target;
    setModuleForm((prev) => ({ ...prev, [name]: value }));
  };

  // CRUD for Program Info
  const handleProgramInfoSubmit = async (e) => {
    e.preventDefault();
  
    const programInfoData = {
      duration: programInfoForm.duration,
      format: programInfoForm.format,
      tuition: programInfoForm.tuition,
      certification: programInfoForm.certification,
      scholarshipInfo: programInfoForm.scholarshipInfo,
      startDates: programInfoForm.startDates.filter(
        (item) => item.startDate && item.applicationDeadline
      ),
    };
  
    try {
      let res;
      if (editingProgramInfoId) {
        res = await axios.put(`${BASE_URL}/api/programInfo/${editingProgramInfoId}`, programInfoData, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setProgramInfos((prev) =>
          prev.map((info) => (info._id === editingProgramInfoId ? res.data : info))
        );
        toast.success("Program info updated");
      } else {
        res = await axios.post(`${BASE_URL}/api/programInfo`, programInfoData, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setProgramInfos((prev) => [res.data, ...prev]);
        toast.success("Program info created");
      }
  
      setProgramInfoForm({
        duration: "",
        format: "",
        tuition: "",
        certification: "",
        scholarshipInfo: "",
        startDates: [{ startDate: "", applicationDeadline: "" }],
      });
      setEditingProgramInfoId(null);
    } catch (err) {
      toast.error("Failed to save program info");
    }
  };
  

  const handleProgramInfoEdit = (info) => {
    setProgramInfoForm({
      duration: info.duration,
      format: info.format,
      tuition: info.tuition,
      certification: info.certification || "",
      scholarshipInfo: info.scholarshipInfo || "",
      startDates: info.startDates.length
        ? info.startDates
        : [{ startDate: "", applicationDeadline: "" }],
    });
    setEditingProgramInfoId(info._id);
  };
  

  const handleProgramInfoDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${BASE_URL}/api/programInfo/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          });
          setProgramInfos((prev) => prev.filter((info) => info._id !== id));
          toast.success("Program info deleted");
        } catch (err) {
          toast.error("Failed to delete program info");
        }
      }
    });
  };

  const handleProgramInfoInputChange = (e) => {
    const { name, value } = e.target;
    setProgramInfoForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleStartDateChange = (index, field, value) => {
    const newStartDates = [...programInfoForm.startDates];
    newStartDates[index][field] = value;
    setProgramInfoForm({ ...programInfoForm, startDates: newStartDates });
  };
  
  const handleAddStartDate = () => {
    setProgramInfoForm((prev) => ({
      ...prev,
      startDates: [...prev.startDates, { startDate: "", applicationDeadline: "" }],
    }));
  };
  





  // CRUD for Faculty Members
  const handleFacultySubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", facultyForm.name);
    formData.append("role", facultyForm.role);
    formData.append("specialty", facultyForm.specialty);
    if (facultyForm.img) {
      formData.append("img", facultyForm.img);
    } else if (!editingFacultyId) {
      toast.error("Image is required for new faculty members");
      return;
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      };
      let res;
      if (editingFacultyId) {
        res = await axios.put(`${BASE_URL}/api/faculty/${editingFacultyId}`, formData, config);
        setFacultyMembers((prev) =>
          prev.map((fac) => (fac._id === editingFacultyId ? res.data : fac))
        );
        toast.success("Faculty member updated");
      } else {
        res = await axios.post(`${BASE_URL}/api/faculty`, formData, config);
        setFacultyMembers((prev) => [res.data, ...prev]);
        toast.success("Faculty member created");
      }
      setFacultyForm({
        name: "",
        role: "",
        specialty: "",
        img: null,
      });
      if (facultyPreviewImg && facultyIsLocalPreview) {
        URL.revokeObjectURL(facultyPreviewImg);
      }
      setFacultyPreviewImg(null);
      setFacultyIsLocalPreview(false);
      setEditingFacultyId(null);
    } catch (err) {
      console.error("Failed to save faculty member:", err.response?.data || err.message);
      toast.error("Failed to save faculty member: " + (err.response?.data?.error || "Unknown error"));
    }
  };

  const handleFacultyEdit = (faculty) => {
    if (facultyPreviewImg && facultyIsLocalPreview) {
      URL.revokeObjectURL(facultyPreviewImg);
    }
    setFacultyForm({
      name: faculty.name,
      role: faculty.role,
      specialty: faculty.specialty,
      img: null,
    });
    setFacultyPreviewImg(faculty.img);
    setFacultyIsLocalPreview(false);
    setEditingFacultyId(faculty._id);
  };

  const handleFacultyDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${BASE_URL}/api/faculty/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          });
          setFacultyMembers((prev) => prev.filter((fac) => fac._id !== id));
          toast.success("Faculty member deleted");
        } catch (err) {
          console.error("Failed to delete faculty member:", err.response?.data || err.message);
          toast.error("Failed to delete faculty member: " + (err.response?.data?.error || "Unknown error"));
        }
      }
    });
  };

  const handleFacultyInputChange = (e) => {
    const { name, value } = e.target;
    setFacultyForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFacultyImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        toast.error("Only JPEG or PNG images are allowed");
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Image size must be less than 2MB");
        return;
      }
      if (facultyPreviewImg && facultyIsLocalPreview) {
        URL.revokeObjectURL(facultyPreviewImg);
      }
      const blobUrl = URL.createObjectURL(file);
      setFacultyForm((prev) => ({ ...prev, img: file }));
      setFacultyPreviewImg(blobUrl);
      setFacultyIsLocalPreview(true);
    }
  };

  // CRUD for Team Members
  const handleTeamSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", teamForm.name);
    formData.append("role", teamForm.role);
    if (teamForm.image) {
      formData.append("image", teamForm.image);
    } else if (!editingTeamId) {
      toast.error("Image is required for new team members");
      return;
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      };
      let res;
      if (editingTeamId) {
        res = await axios.put(`${BASE_URL}/api/team/${editingTeamId}`, formData, config);
        setTeamMembers((prev) =>
          prev.map((member) => (member._id === editingTeamId ? res.data : member))
        );
        toast.success("Team member updated");
      } else {
        res = await axios.post(`${BASE_URL}/api/team`, formData, config);
        setTeamMembers((prev) => [res.data, ...prev]);
        toast.success("Team member created");
      }
      setTeamForm({
        name: "",
        role: "",
        image: null,
      });
      if (teamPreviewImg && teamIsLocalPreview) {
        URL.revokeObjectURL(teamPreviewImg);
      }
      setTeamPreviewImg(null);
      setTeamIsLocalPreview(false);
      setEditingTeamId(null);
    } catch (err) {
      console.error("Failed to save team member:", err.response?.data || err.message);
      toast.error("Failed to save team member: " + (err.response?.data?.message || "Unknown error"));
    }
  };

  const handleTeamEdit = (member) => {
    if (teamPreviewImg && teamIsLocalPreview) {
      URL.revokeObjectURL(teamPreviewImg);
    }
    setTeamForm({
      name: member.name,
      role: member.role,
      image: null,
    });
    setTeamPreviewImg(member.image);
    setTeamIsLocalPreview(false);
    setEditingTeamId(member._id);
  };

  const handleTeamDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${BASE_URL}/api/team/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          });
          setTeamMembers((prev) => prev.filter((member) => member._id !== id));
          toast.success("Team member deleted");
        } catch (err) {
          console.error("Failed to delete team member:", err.response?.data || err.message);
          toast.error("Failed to delete team member: " + (err.response?.data?.message || "Unknown error"));
        }
      }
    });
  };

  const handleTeamInputChange = (e) => {
    const { name, value } = e.target;
    setTeamForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTeamImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        toast.error("Only JPEG or PNG images are allowed");
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Image size must be less than 2MB");
        return;
      }
      if (teamPreviewImg && teamIsLocalPreview) {
        URL.revokeObjectURL(teamPreviewImg);
      }
      const blobUrl = URL.createObjectURL(file);
      setTeamForm((prev) => ({ ...prev, image: file }));
      setTeamPreviewImg(blobUrl);
      setTeamIsLocalPreview(true);
    }
  };

  // CRUD for FAQs
  const handleFaqSubmit = async (e) => {
    e.preventDefault();
    const faqData = {
      question: faqForm.question,
      answer: faqForm.answer,
    };

    try {
      if (editingFaqId) {
        const res = await axios.put(
          `${BASE_URL}/api/faqs/${editingFaqId}`,
          faqData,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          }
        );
        setFaqs((prev) =>
          prev.map((faq) => (faq._id === editingFaqId ? res.data : faq))
        );
        toast.success("FAQ updated");
      } else {
        const res = await axios.post(`${BASE_URL}/api/faqs`, faqData, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setFaqs((prev) => [res.data, ...prev]);
        toast.success("FAQ created");
      }
      setFaqForm({
        question: "",
        answer: "",
      });
      setEditingFaqId(null);
    } catch (err) {
      console.error("Failed to save FAQ:", err.response?.data || err.message);
      toast.error("Failed to save FAQ: " + (err.response?.data?.message || "Unknown error"));
    }
  };

  const handleFaqEdit = (faq) => {
    setFaqForm({
      question: faq.question,
      answer: faq.answer,
    });
    setEditingFaqId(faq._id);
  };

  const handleFaqDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${BASE_URL}/api/faqs/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          });
          setFaqs((prev) => prev.filter((faq) => faq._id !== id));
          toast.success("FAQ deleted");
        } catch (err) {
          console.error("Failed to delete FAQ:", err.response?.data || err.message);
          toast.error("Failed to delete FAQ: " + (err.response?.data?.message || "Unknown error"));
        }
      }
    });
  };

  const handleFaqInputChange = (e) => {
    const { name, value } = e.target;
    setFaqForm((prev) => ({ ...prev, [name]: value }));
  };

  // CRUD for Testimonials
  const handleTestimonialSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", testimonialForm.name);
    formData.append("desc", testimonialForm.desc);
    formData.append("role", testimonialForm.role);
    formData.append("stars", testimonialForm.stars);
    if (testimonialForm.img) {
      formData.append("img", testimonialForm.img);
    } else if (!editingTestimonialId) {
      toast.error("Image is required for new testimonials");
      return;
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      };
      let res;
      if (editingTestimonialId) {
        res = await axios.put(`${BASE_URL}/api/testimonials/${editingTestimonialId}`, formData, config);
        setTestimonials((prev) =>
          prev.map((test) => (test._id === editingTestimonialId ? res.data : test))
        );
        toast.success("Testimonial updated");
      } else {
        res = await axios.post(`${BASE_URL}/api/testimonials`, formData, config);
        setTestimonials((prev) => [res.data, ...prev]);
        toast.success("Testimonial created");
      }
      setTestimonialForm({
        img: null,
        name: "",
        desc: "",
        role: "",
        stars: "",
      });
      if (testimonialPreviewImg && testimonialIsLocalPreview) {
        URL.revokeObjectURL(testimonialPreviewImg);
      }
      setTestimonialPreviewImg(null);
      setTestimonialIsLocalPreview(false);
      setEditingTestimonialId(null);
    } catch (err) {
      console.error("Failed to save testimonial:", err.response?.data || err.message);
      toast.error("Failed to save testimonial: " + (err.response?.data?.message || "Unknown error"));
    }
  };

  const handleTestimonialEdit = (testimonial) => {
    if (testimonialPreviewImg && testimonialIsLocalPreview) {
      URL.revokeObjectURL(testimonialPreviewImg);
    }
    setTestimonialForm({
      img: null,
      name: testimonial.name,
      desc: testimonial.desc,
      role: testimonial.role,
      stars: testimonial.stars.toString(),
    });
    setTestimonialPreviewImg(testimonial.img);
    setTestimonialIsLocalPreview(false);
    setEditingTestimonialId(testimonial._id);
  };

  const handleTestimonialDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${BASE_URL}/api/testimonials/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          });
          setTestimonials((prev) => prev.filter((test) => test._id !== id));
          toast.success("Testimonial deleted");
        } catch (err) {
          console.error("Failed to delete testimonial:", err.response?.data || err.message);
          toast.error("Failed to delete testimonial: " + (err.response?.data?.message || "Unknown error"));
        }
      }
    });
  };

  const handleTestimonialInputChange = (e) => {
    const { name, value } = e.target;
    setTestimonialForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTestimonialImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        toast.error("Only JPEG or PNG images are allowed");
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Image size must be less than 2MB");
        return;
      }
      if (testimonialPreviewImg && testimonialIsLocalPreview) {
        URL.revokeObjectURL(testimonialPreviewImg);
      }
      const blobUrl = URL.createObjectURL(file);
      setTestimonialForm((prev) => ({ ...prev, img: file }));
      setTestimonialPreviewImg(blobUrl);
      setTestimonialIsLocalPreview(true);
    }
  };

  const filteredMessages = messages.filter(
    (msg) =>
      msg.name.toLowerCase().includes(searchContact.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchContact.toLowerCase()) ||
      msg.subject.toLowerCase().includes(searchContact.toLowerCase())
  );

  const sortedMessages = [...filteredMessages].sort((a, b) => {
    if (sortOption === "read") return a.isRead === b.isRead ? 0 : a.isRead ? -1 : 1;
    if (sortOption === "unread") return a.isRead === b.isRead ? 0 : a.isRead ? 1 : -1;
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const navItems = [
    { id: "programModules", label: "Program Modules", icon: Layers },
    { id: "programInfo", label: "Program Info", icon: BookOpen },
    { id: "inAction", label: "In-Action Media", icon: Film },
    { id: "faculty", label: "Faculty Members", icon: GraduationCap },
    { id: "team", label: "Team Members", icon: Users },
    { id: "contact", label: "Contact Messages", icon: MessageSquare },
    { id: "testimonials", label: "Testimonials", icon: Star },
    { id: "faq", label: "FAQ", icon: Info },
  ];

  const activeTabLabel = navItems.find((item) => item.id === activeTab)?.label || "Dashboard";

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      <ToastContainer position="top-right" autoClose={3000} />
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-xl text-center font-bold text-indigo-600 dark:text-indigo-400">IIHH CMS</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-gray-600 dark:text-gray-300"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="mt-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium ${
                activeTab === item.id
                  ? "bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              } transition-colors duration-200`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="absolute bottom-4 px-4">
          <button
            onClick={handleLogout}
            className="flex items-center text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 md:ml-64">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-gray-600 dark:text-gray-300"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
            Manage {activeTabLabel}
          </h1>
        </div>

        <div className="max-w-7xl mx-auto">

{/* Contact details Section */}
          {activeTab === "contact" && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Message List (Left) */}
                <div className="flex-1">
                  {/* Sticky Search Bar */}
                  <div className="sticky top-0 bg-white dark:bg-gray-800 pb-4 mb-4 border-b border-gray-200 dark:border-gray-700 z-10">
                    <div className="relative">
                      <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                      <input
                        type="text"
                        placeholder="Search by name, email, or subject"
                        value={searchContact}
                        onChange={(e) => setSearchContact(e.target.value)}
                        className="w-full pl-10 p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Message List */}
                  <div className="max-h-auto pr-2">
                    {sortedMessages.length === 0 ? (
                      <p className="text-gray-500 dark:text-gray-400 text-sm">No matching contact form messages.</p>
                    ) : (
                      <div className="space-y-3">
                        {sortedMessages.map((msg) => (
                          <div
                            key={msg._id}
                            className="bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-200"
                          >
                            <button
                              onClick={() => setOpenMessageId(openMessageId === msg._id ? null : msg._id)}
                              className="w-full p-4 flex justify-between items-center text-left"
                            >
                              <div className="flex-1 flex items-center gap-3">
                                <span
                                  className={`h-2 w-2 rounded-full ${
                                    msg.isRead ? "bg-green-500" : "bg-red-500"
                                  }`}
                                ></span>
                                <div>
                                  <p className="text-gray-800 dark:text-white text-base font-medium">
                                    {msg.name}
                                  </p>
                                  <p className="text-gray-600 dark:text-gray-300 text-sm truncate max-w-[200px] sm:max-w-[400px]">
                                    {msg.email} | {msg.subject.slice(0, 50)}
                                    {msg.subject.length > 50 ? "..." : ""}
                                  </p>
                                </div>
                              </div>
                              <i
                                className={`fas fa-chevron-down text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                                  openMessageId === msg._id ? "rotate-180" : ""
                                }`}
                              ></i>
                            </button>
                            <div
                              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                openMessageId === msg._id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                              }`}
                            >
                              <div className="px-4 pb-4">
                                <p className="text-gray-800 dark:text-white text-sm">
                                  <strong>Subject:</strong> {msg.subject}
                                </p>
                                <p className="text-gray-800 dark:text-white text-sm mt-2">
                                  <strong>Message:</strong> {msg.message}
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                                  Created: {new Date(msg.createdAt).toLocaleString()}
                                </p>
                                <div className="mt-3 flex gap-2">
                                  {!msg.isRead && (
                                    <button
                                      onClick={() => handleMarkAsRead(msg._id)}
                                      className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-sm"
                                    >
                                      Mark as Read
                                    </button>
                                  )}
                                  <button
                                    onClick={() => handleDelete(msg._id)}
                                    className="text-white rounded-lg"
                                  >
                                    <i className="fas fa-trash" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Side Navigation for Sort Options (Right) */}
                <div className="w-full md:w-48 lg:w-64 mt-4 md:mt-0">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 shadow-sm">
                    <h4 className="text-sm font-medium text-gray-800 dark:text-white mb-2">Sort Messages</h4>
                    <div className="space-y-1">
                      {["latest", "unread", "read"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setSortOption(option)}
                          className={`w-full text-left p-2 rounded-md text-sm transition-colors duration-200 ${
                            sortOption === option
                              ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 font-medium"
                              : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                          }`}
                        >
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


{/* Program Modules section */}
          {activeTab === "programModules" && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => setModuleFilter("all")}
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                      moduleFilter === "all"
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500"
                    }`}
                  >
                    All Modules
                  </button>
                  <button
                    onClick={() => setModuleFilter("featured")}
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                      moduleFilter === "featured"
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500"
                    }`}
                  >
                    Manage Featured Modules
                  </button>
                </div>
                <button
                  onClick={() => {
                    setShowModuleForm(true);
                    setModuleForm({
                      title: "",
                      subtitle: "",
                      objective: "",
                      description: "",
                      icon: "",
                      color: "",
                      topics: "",
                      outcomes: "",
                      quote: "",
                      isFeatured: false,
                    });
                    setEditingModuleId(null);
                  }}
                  className="px-4 py-2 flex items-center bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  <i className="fas fa-plus mr-2"></i>
                  Add New Module
                </button>
              </div>
              
              {/* Module Modal Form */}
              {showModuleForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                          {editingModuleId ? "Edit Module" : "Add New Module"}
                        </h3>
                        <button
                          onClick={() => setShowModuleForm(false)}
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          <i className="fas fa-times text-xl"></i>
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="title"
                            placeholder="Module Title"
                            value={moduleForm.title}
                            onChange={handleModuleInputChange}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                          />
                          <input
                            type="text"
                            name="subtitle"
                            placeholder="Module Subtitle"
                            value={moduleForm.subtitle}
                            onChange={handleModuleInputChange}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                          />
                        </div>
                        
                        <textarea
                          name="objective"
                          placeholder="Module Objective"
                          value={moduleForm.objective}
                          onChange={handleModuleInputChange}
                          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          rows="2"
                          required
                        />
                        
                        <textarea
                          name="description"
                          placeholder="Module Description"
                          value={moduleForm.description}
                          onChange={handleModuleInputChange}
                          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          rows="3"
                          required
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="icon"
                            placeholder="Icon Class (e.g., fa-seedling)"
                            value={moduleForm.icon}
                            onChange={handleModuleInputChange}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                          />
                          <input
                            type="text"
                            name="color"
                            placeholder="Color (e.g., green)"
                            value={moduleForm.color}
                            onChange={handleModuleInputChange}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <textarea
                            name="topics"
                            placeholder="Module Topics (one per line)"
                            value={moduleForm.topics}
                            onChange={handleModuleInputChange}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            rows="3"
                            required
                          />
                          <textarea
                            name="outcomes"
                            placeholder="Module Outcomes (one per line)"
                            value={moduleForm.outcomes}
                            onChange={handleModuleInputChange}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            rows="3"
                            required
                          />
                        </div>
                        
                        <textarea
                          name="quote"
                          placeholder="Module Quote"
                          value={moduleForm.quote}
                          onChange={handleModuleInputChange}
                          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          rows="2"
                          required
                        />

                        {/* New Switch for Featured */}
                        <div className="flex items-center gap-3 mt-2">
                          <label htmlFor="featuredToggle" className="text-gray-800 dark:text-gray-200 font-medium">
                            Mark as Featured
                          </label>
                          <input
                            id="featuredToggle"
                            type="checkbox"
                            checked={moduleForm.isFeatured}
                            onChange={(e) =>
                              setModuleForm((prevForm) => ({ ...prevForm, isFeatured: e.target.checked }))
                            }
                            className="w-5 h-5 accent-indigo-600"
                          />
                        </div>
                        
                        <div className="flex gap-2 justify-end mt-2">
                          <button
                            type="button"
                            onClick={() => setShowModuleForm(false)}
                            className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            onClick={(e) => {
                              handleModuleSubmit(e);
                              setShowModuleForm(false);
                            }}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                          >
                            {editingModuleId ? "Update Module" : "Add Module"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Module Tabs and Details Section */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* Module Tabs - Left Side */}
                <div className="w-full md:w-1/4">
                  <div className="border-r border-gray-200 dark:border-gray-700 pr-2">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
                      {moduleFilter === "featured" ? "Featured Modules" : "All Modules"}
                    </h3>
                    <nav className="flex flex-col space-y-1">
                      {modules.length === 0 ? (
                        <p className="text-gray-500 dark:text-gray-400 p-2">
                          No {moduleFilter === "featured" ? "featured" : "program"} modules available.
                        </p>
                      ) : (
                        modules.map((module) => (
                          <button
                            key={module._id}
                            onClick={() => setActiveModuleId(module._id)}
                            className={`flex items-center py-2 px-3 rounded-lg transition-colors duration-200 ${
                              activeModuleId === module._id
                                ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                          >
                            <i className={`fas ${module.icon} mr-2 text-${module.color}-500`}></i>
                            <span className="truncate">{module.title}</span>
                          </button>
                        ))
                      )}
                    </nav>
                  </div>
                </div>
                
                {/* Module Details - Right Side */}
                <div className="w-full md:w-3/4">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Details</h3>
                  {activeModuleId && modules.map((module) => (
                    module._id === activeModuleId && (
                      <div 
                        key={module._id}
                        className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="flex justify-between items-center mb-3">
                         <div className="flex"> 
                          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                            {module.title}
                          </h3>

                          {module.isFeatured && (
                            <i className="fas fa-star text-yellow-500 ml-2" title="Featured Module"></i>
                          )}
                         </div> 
                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                handleModuleEdit(module);
                                setShowModuleForm(true);
                              }}
                              className="text-lg text-white rounded-lg"
                            >
                              <i className="fas fa-edit" />
                            </button>
                            

                            <button
                              onClick={() => handleModuleDelete(module._id)}
                              className="text-white rounded-lg"
                            >
                              <i className="fas fa-trash" />
                            </button>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300">
                          <strong>Subtitle:</strong> {module.subtitle}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          <strong>Objective:</strong> {module.objective}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          <strong>Description:</strong> {module.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                          <p className="text-gray-600 dark:text-gray-300">
                            <strong>Icon:</strong> {module.icon}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300">
                            <strong>Color:</strong> {module.color}
                          </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                          <div>
                            <p className="text-gray-600 dark:text-gray-300 font-medium">Topics:</p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                              {module.topics.map((topic, index) => (
                                <li key={index}>{topic}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-gray-600 dark:text-gray-300 font-medium">Outcomes:</p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                              {module.outcomes.map((outcome, index) => (
                                <li key={index}>{outcome}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mt-3 italic">
                          "{module.quote}"
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                          Created: {new Date(module.createdAt).toLocaleString()}
                        </p>
                      </div>
                    )
                  ))}
                  
                  {!activeModuleId && (
                    <div className="flex items-center justify-center h-64 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <p className="text-gray-500 dark:text-gray-400">Select a module to view details</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

{/* Program Information Section */}
            {activeTab === "programInfo" && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  {/* Form Section (Left) */}
                  <div className="w-full md:w-2/5">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
                      {editingProgramInfoId ? "Edit Program Info" : "Add Program Info"}
                    </h3>
                    <form onSubmit={handleProgramInfoSubmit} className="space-y-3">
                      <input
                        type="text"
                        name="duration"
                        placeholder="Program Duration (e.g., 6 months)"
                        value={programInfoForm.duration}
                        onChange={handleProgramInfoInputChange}
                        className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                        required
                      />
                      <input
                        type="text"
                        name="format"
                        placeholder="Program Format (e.g., Online)"
                        value={programInfoForm.format}
                        onChange={handleProgramInfoInputChange}
                        className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                        required
                      />
                      <div className="space-y-2">
                        <label className="block text-gray-800 dark:text-white text-sm font-medium">Start Dates</label>
                        {programInfoForm.startDates.map((item, index) => (
                          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <input
                              type="date"
                              name="startDate"
                              placeholder="Start Date"
                              value={item.startDate}
                              onChange={(e) =>
                                handleStartDateChange(index, "startDate", e.target.value)
                              }
                              className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white text-sm"
                              required
                            />
                            <input
                              type="date"
                              name="applicationDeadline"
                              placeholder="Application Deadline"
                              value={item.applicationDeadline}
                              onChange={(e) =>
                                handleStartDateChange(index, "applicationDeadline", e.target.value)
                              }
                              className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white text-sm"
                              required
                            />
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={handleAddStartDate}
                          className="text-xs text-indigo-600 hover:underline"
                        >
                          + Add Another Start Date
                        </button>
                      </div>
                      <input
                        type="text"
                        name="tuition"
                        placeholder="Tuition (e.g., $5000)"
                        value={programInfoForm.tuition}
                        onChange={handleProgramInfoInputChange}
                        className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                        required
                      />
                      <input
                        type="text"
                        name="certification"
                        placeholder="Certification Info (e.g., Includes certificate)"
                        value={programInfoForm.certification}
                        onChange={handleProgramInfoInputChange}
                        className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                      />
                      <input
                        type="text"
                        name="scholarshipInfo"
                        placeholder="Scholarship Info (e.g., 20% available)"
                        value={programInfoForm.scholarshipInfo}
                        onChange={handleProgramInfoInputChange}
                        className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                      />
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-sm"
                        >
                          {editingProgramInfoId ? "Update Program Info" : "Add Program Info"}
                        </button>
                        {editingProgramInfoId && (
                          <button
                            type="button"
                            onClick={() => {
                              setProgramInfoForm({
                                duration: "",
                                format: "",
                                startDates: [{ startDate: "", applicationDeadline: "" }],
                                tuition: "",
                                certification: "",
                                scholarshipInfo: "",
                              });
                              setEditingProgramInfoId(null);
                            }}
                            className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 text-sm"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </form>
                  </div>

                  {/* Data Section (Right) */}
                  <div className="w-full md:w-3/5">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Program Info List</h3>
                    <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                      {programInfos.length === 0 ? (
                        <p className="text-gray-500 dark:text-gray-400 text-sm">No program info available.</p>
                      ) : (
                        programInfos.map((info) => (
                          <div
                            key={info._id}
                            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 hover:shadow-md transition-shadow duration-200"
                          >
                            <p className="text-gray-800 dark:text-white text-sm">
                              <strong>Duration:</strong> {info.duration}
                            </p>
                            <p className="text-gray-800 dark:text-white text-sm">
                              <strong>Format:</strong> {info.format}
                            </p>
                            <p className="text-gray-800 dark:text-white text-sm">
                              <strong>Start Dates:</strong>
                            </p>
                            <ul className="list-disc pl-4 text-gray-800 dark:text-white text-sm">
                              {info.startDates.map((date, index) => (
                                <li key={index}>
                                  Start: {date.startDate} | Deadline: {date.applicationDeadline}
                                </li>
                              ))}
                            </ul>
                            <p className="text-gray-800 dark:text-white text-sm">
                              <strong>Tuition:</strong> {info.tuition}
                            </p>
                            {info.certification && (
                              <p className="text-gray-800 dark:text-white text-sm">
                                <strong>Certification:</strong> {info.certification}
                              </p>
                            )}
                            {info.scholarshipInfo && (
                              <p className="text-gray-800 dark:text-white text-sm">
                                <strong>Scholarship:</strong> {info.scholarshipInfo}
                              </p>
                            )}
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Created: {new Date(info.createdAt).toLocaleString()}
                            </p>
                            <div className="mt-2 flex gap-2">
                              <button
                                onClick={() => handleProgramInfoEdit(info)}
                                className="text-lg text-white rounded-lg"
                              >
                                <i className="fas fa-edit" />
                              </button>
                              <button
                                onClick={() => handleProgramInfoDelete(info._id)}
                                className="text-white rounded-lg"
                              >
                                <i className="fas fa-trash" />
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

{/* Faculty Section */}
          {activeTab === "faculty" && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6">
              {/* Toggle Button for Form */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">Faculty Members</h3>
                <button
                  onClick={() => setShowFacultyForm(!showFacultyForm)}
                  className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-sm flex items-center gap-2"
                >
                  <i className="w-4 h-4">
                    {showFacultyForm ? <XMarkIcon /> : <PlusIcon />}
                  </i>
                  {showFacultyForm ? "Close Form" : "Add Faculty Member"}
                </button>
              </div>

              {/* Toggleable Form */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  showFacultyForm ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
                }`}
              >
                <form onSubmit={handleFacultySubmit} className="space-y-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Faculty Name (e.g., Dr. John Doe)"
                    value={facultyForm.name}
                    onChange={handleFacultyInputChange}
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    required
                  />
                  <input
                    type="text"
                    name="role"
                    placeholder="Role (e.g., Professor)"
                    value={facultyForm.role}
                    onChange={handleFacultyInputChange}
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    required
                  />
                  <input
                    type="text"
                    name="specialty"
                    placeholder="Specialty (e.g., Computer Science)"
                    value={facultyForm.specialty}
                    onChange={handleFacultyInputChange}
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    required
                  />
                  <input
                    type="file"
                    name="img"
                    accept="image/*"
                    onChange={handleFacultyImageChange}
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white text-sm"
                    required={!editingFacultyId}
                  />
                  {facultyPreviewImg && (
                    <div className="mt-2">
                      <img
                        src={facultyIsLocalPreview ? facultyPreviewImg : `${BASE_URL}${facultyPreviewImg}`}
                        alt="Preview"
                        className="h-20 w-20 rounded-lg object-cover object-center border border-gray-200 dark:border-gray-600"
                        onError={(e) => (e.target.src = `${BASE_URL}/placeholder.jpg`)}
                      />
                    </div>
                  )}
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-sm"
                    >
                      {editingFacultyId ? "Update Faculty Member" : "Add Faculty Member"}
                    </button>
                    {editingFacultyId && (
                      <button
                        type="button"
                        onClick={() => {
                          setFacultyForm({
                            name: "",
                            role: "",
                            specialty: "",
                            img: null,
                          });
                          if (facultyPreviewImg && facultyIsLocalPreview) {
                            URL.revokeObjectURL(facultyPreviewImg);
                          }
                          setFacultyPreviewImg(null);
                          setFacultyIsLocalPreview(false);
                          setEditingFacultyId(null);
                          setShowFacultyForm(false);
                        }}
                        className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 text-sm"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Faculty Members Grid */}
              <div className="max-h-auto pr-2">
                {facultyMembers.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">No faculty members available.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {facultyMembers.map((faculty) => (
                      <div
                        key={faculty._id}
                        className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200 flex flex-col"
                      >
                        <div className="flex items-center mb-3">
                          <img
                            src={`${BASE_URL}${faculty.img}`}
                            alt={faculty.name}
                            className="h-20 w-20 rounded-lg object-cover object-center mr-3 border border-gray-200 dark:border-gray-600 sm:h-20 sm:w-20"
                            onError={(e) => {
                              e.target.src = `${BASE_URL}/placeholder.jpg`;
                              e.target.className = "h-20 w-20 rounded-lg object-cover object-center mr-3 border border-gray-200 dark:border-gray-600 bg-gray-200 dark:bg-gray-600";
                            }}
                          />
                          <div>
                            <p className="text-gray-800 dark:text-white text-base font-medium">
                              {faculty.name}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {faculty.role}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {faculty.specialty}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">
                          Created: {new Date(faculty.createdAt).toLocaleString()}
                        </p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              handleFacultyEdit(faculty);
                              setShowFacultyForm(true);
                            }}
                            className="text-lg text-white rounded-lg"
                          >
                            <i className="fas fa-edit" />
                          </button>
                          <button
                            onClick={() => handleFacultyDelete(faculty._id)}
                            className="text-white rounded-lg"
                          >
                            <i className="fas fa-trash" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
          

{/* Team Section */}
          {activeTab === "team" && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6">
              {/* Toggle Button for Form */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">Team Members</h3>
                <button
                  onClick={() => setShowTeamForm(!showTeamForm)}
                  className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-sm flex items-center gap-2"
                >
                  <i className="w-4 h-4">
                    {showTeamForm ? <XMarkIcon /> : <PlusIcon />}
                  </i>
                  {showTeamForm ? "Close Form" : "Add Team Member"}
                </button>
              </div>

              {/* Toggleable Form */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  showTeamForm ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
                }`}
              >
                <form onSubmit={handleTeamSubmit} className="space-y-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Team Member Name (e.g., Jane Smith)"
                    value={teamForm.name}
                    onChange={handleTeamInputChange}
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    required
                  />
                  <input
                    type="text"
                    name="role"
                    placeholder="Role (e.g., Project Manager)"
                    value={teamForm.role}
                    onChange={handleTeamInputChange}
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    required
                  />
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleTeamImageChange}
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white text-sm"
                    required={!editingTeamId}
                  />
                  {teamPreviewImg && (
                    <div className="mt-2">
                      <img
                        src={teamIsLocalPreview ? teamPreviewImg : `${BASE_URL}${teamPreviewImg}`}
                        alt="Preview"
                        className="h-20 w-20 rounded-full object-cover object-center border border-gray-200 dark:border-gray-600"
                        onError={(e) => (e.target.src = `${BASE_URL}/placeholder.jpg`)}
                      />
                    </div>
                  )}
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-sm"
                    >
                      {editingTeamId ? "Update Team Member" : "Add Team Member"}
                    </button>
                    {editingTeamId && (
                      <button
                        type="button"
                        onClick={() => {
                          setTeamForm({
                            name: "",
                            role: "",
                            image: null,
                          });
                          if (teamPreviewImg && teamIsLocalPreview) {
                            URL.revokeObjectURL(teamPreviewImg);
                          }
                          setTeamPreviewImg(null);
                          setTeamIsLocalPreview(false);
                          setEditingTeamId(null);
                          setShowTeamForm(false);
                        }}
                        className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 text-sm"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Team Members Grid */}
              <div className="max-h-auto pr-2">
                {teamMembers.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">No team members available.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {teamMembers.map((member) => (
                      <div
                        key={member._id}
                        className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200 flex flex-col"
                      >
                        <div className="flex items-center mb-3">
                          <img
                            src={`${BASE_URL}${member.image}`}
                            alt={member.name}
                            className="h-20 w-20 rounded-full object-cover object-center mr-3 border border-gray-200 dark:border-gray-600 sm:h-20 sm:w-20"
                            onError={(e) => {
                              e.target.src = `${BASE_URL}/placeholder.jpg`;
                              e.target.className = "h-20 w-20 rounded-full object-cover object-center mr-3 border border-gray-200 dark:border-gray-600 bg-gray-200 dark:bg-gray-600";
                            }}
                          />
                          <div>
                            <p className="text-gray-800 dark:text-white text-base font-medium">
                              {member.name}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {member.role}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">
                          Created: {new Date(member.createdAt).toLocaleString()}
                        </p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              handleTeamEdit(member);
                              setShowTeamForm(true);
                            }}
                            className="text-lg text-white rounded-lg"
                          >
                            <i className="fas fa-edit" />
                          </button>
                          <button
                            onClick={() => handleTeamDelete(member._id)}
                            className="text-white rounded-lg"
                          >
                          <i className="fas fa-trash" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}


{/* FAQ Section */}
          {activeTab === "faq" && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* FAQ List (Left) */}
                <div className="flex-1">
                  {/* Toggle Button for Form */}
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">FAQs</h3>
                    <button
                      onClick={() => setShowFaqForm(!showFaqForm)}
                      className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-sm flex items-center gap-2"
                    >
                      <i className="w-4 h-4">
                        {showFaqForm ? <XMarkIcon /> : <PlusIcon />}
                      </i>
                      {showFaqForm ? "Close Form" : "Add FAQ"}
                    </button>
                  </div>

                  {/* Toggleable Form */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      showFaqForm ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <form onSubmit={handleFaqSubmit} className="space-y-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3 shadow-sm">
                      <input
                        type="text"
                        name="question"
                        placeholder="Question (e.g., What is the program duration?)"
                        value={faqForm.question}
                        onChange={handleFaqInputChange}
                        className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                        required
                      />
                      <textarea
                        name="answer"
                        placeholder="Answer (e.g., The program lasts 6 months.)"
                        value={faqForm.answer}
                        onChange={handleFaqInputChange}
                        className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                        rows="4"
                        required
                      />
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-sm"
                        >
                          {editingFaqId ? "Update FAQ" : "Add FAQ"}
                        </button>
                        {editingFaqId && (
                          <button
                            type="button"
                            onClick={() => {
                              setFaqForm({
                                question: "",
                                answer: "",
                              });
                              setEditingFaqId(null);
                              setShowFaqForm(false);
                            }}
                            className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 text-sm"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </form>
                  </div>

                  {/* FAQ Accordion List */}
                  <div className="max-h-auto pr-2">
                    {faqs.length === 0 ? (
                      <p className="text-black dark:text-black text-sm">No FAQs available.</p>
                    ) : (
                      <div className="space-y-3">
                        {faqs.map((faq) => (
                          <div
                            key={faq._id}
                            className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md"
                          >
                            <button
                              onClick={() => setOpenFaqId(openFaqId === faq._id ? null : faq._id)}
                              className="w-full p-4 flex justify-between items-center text-left"
                            >
                              <div className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                                <p className="text-white text-base font-medium">
                                  {faq.question}
                                </p>
                              </div>
                              <i
                                className={`fas fa-chevron-down text-black dark:text-black transition-transform duration-200 ${
                                  openFaqId === faq._id ? "rotate-180" : ""
                                }`}
                              ></i>
                            </button>
                            <div
                              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                openFaqId === faq._id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                              }`}
                            >
                              <div className="px-4 pb-4">
                                <p className="text-white dark:text-white text-sm">
                                  {faq.answer}
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                                  Created: {new Date(faq.createdAt).toLocaleString()}
                                </p>
                                <div className="mt-3 flex gap-2">
                                  <button
                                    onClick={() => {
                                      handleFaqEdit(faq);
                                      setShowFaqForm(true);
                                    }}
                                    className="text-lg text-white rounded-lg"
                                  >
                                    <i className="fas fa-edit" />
                                  </button>
                                  <button
                                    onClick={() => handleFaqDelete(faq._id)}
                                    className="text-white rounded-lg"
                                  >
                                    <i className="fas fa-trash" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Side Navigation for Sort and Visibility (Right) */}
                <div className="w-full md:w-48 lg:w-64 mt-4 md:mt-0">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 shadow-sm">
                    {/* Sort Options */}
                    <h4 className="text-sm font-medium text-gray-800 dark:text-white mb-2">Sort FAQ's</h4>
                    <select
                      defaultValue="latest"
                      className="w-full p-2 rounded-lg border border-indigo-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-colors duration-200"
                    >
                      <option value="latest">Latest</option>
                      <option value="oldest">Oldest</option>
                      <option value="a-z">A-Z</option>
                      <option value="z-a">Z-A</option>
                    </select>

                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                      
                    {/* Visibility Management */}
                    <div>
                      <h1
                        className="w-full text-left rounded-md text-sm transition-colors mt-3 pb-2 duration-200 flex items-center justify-between bg-gray-50 dark:bg-gray-700 text-white dark:text-white font-medium"
                      >
                        <span className="flex items-center gap-2">
                          Manage FAQ Visibility
                        </span>
                      </h1>
                      <div
                        className={`transition-all duration-300 ease-in-out max-h-auto opacity-100 mt-2"
                        }`}
                      >
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-3 max-h-auto">
                          {faqs.length === 0 ? (
                            <p className="text-xs text-gray-500 dark:text-gray-400 p-2">No FAQs to manage.</p>
                          ) : (
                            <div className="space-y-2">
                              {faqs.map((faq) => (
                                <div key={faq._id} className="text-xs">
                                  <p className="truncate max-w-[100px] sm:max-w-[150px] text-gray-800 dark:text-white mb-1">
                                    {faq.question.slice(0, 30)}
                                    {faq.question.length > 30 ? "..." : ""}
                                  </p>
                                  <div className="flex items-center gap-2">
                                    <input
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 transform transition-transform duration-200 hover:scale-110"
                                      defaultChecked={Math.random() > 0.5} // Placeholder for demo
                                    />
                                    <span className="text-gray-600 dark:text-gray-300">H</span>
                                    <input
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 transform transition-transform duration-200 hover:scale-110"
                                      defaultChecked={Math.random() > 0.5} // Placeholder for demo
                                    />
                                    <span className="text-gray-600 dark:text-gray-300">P</span>
                                    <input
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 transform transition-transform duration-200 hover:scale-110"
                                      defaultChecked={Math.random() > 0.5} // Placeholder for demo
                                    />
                                    <span className="text-gray-600 dark:text-gray-300">C</span>
                                    <span className="ml-auto inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500 text-white">
                                      {Math.floor(Math.random() * 4)}/3
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


{/* Testimonials Section */}
          {activeTab === "testimonials" && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Testimonial List (Left) */}
            <div className="flex-1">
              {/* Toggle Button for Form */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">Testimonials</h3>
                <button
                  onClick={() => setShowTestimonialForm(!showTestimonialForm)}
                  className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-sm flex items-center gap-2"
                >
                  <i className="w-4 h-4">
                    {showTestimonialForm ? <XMarkIcon /> : <PlusIcon />}
                  </i>
                  {showTestimonialForm ? "Close Form" : "Add Testimonial"}
                </button>
              </div>

              {/* Toggleable Form */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  showTestimonialForm ? "max-h-[600px] opacity-100 mb-4" : "max-h-0 opacity-0"
                }`}
              >
                <form onSubmit={handleTestimonialSubmit} className="space-y-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3 shadow-sm">
                  <input
                    type="file"
                    name="img"
                    accept="image/*"
                    onChange={handleTestimonialImageChange}
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white text-sm"
                    required={!editingTestimonialId}
                  />
                  {testimonialPreviewImg && (
                    <div className="mt-2 flex justify-center">
                      <img
                        src={testimonialIsLocalPreview ? testimonialPreviewImg : `${BASE_URL}${testimonialPreviewImg}`}
                        alt="Preview"
                        className="h-24 w-24 object-cover rounded-lg"
                        onError={(e) => (e.target.src = `${BASE_URL}/placeholder.jpg`)}
                      />
                    </div>
                  )}
                  <input
                    type="text"
                    name="name"
                    placeholder="Name (e.g., John Doe)"
                    value={testimonialForm.name}
                    onChange={handleTestimonialInputChange}
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    required
                  />
                  <textarea
                    name="desc"
                    placeholder="Feedback Message (e.g., Amazing program!)"
                    value={testimonialForm.desc}
                    onChange={handleTestimonialInputChange}
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    rows="4"
                    required
                  />
                  <input
                    type="text"
                    name="role"
                    placeholder="Role (e.g., Student)"
                    value={testimonialForm.role}
                    onChange={handleTestimonialInputChange}
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    required
                  />
                  <input
                    type="number"
                    name="stars"
                    placeholder="Rating (1-5)"
                    value={testimonialForm.stars}
                    onChange={handleTestimonialInputChange}
                    min="1"
                    max="5"
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    required
                  />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-sm"
                    >
                      {editingTestimonialId ? "Update Testimonial" : "Add Testimonial"}
                    </button>
                    {editingTestimonialId && (
                      <button
                        type="button"
                        onClick={() => {
                          setTestimonialForm({
                            img: null,
                            name: "",
                            desc: "",
                            role: "",
                            stars: "",
                          });
                          if (testimonialPreviewImg && testimonialIsLocalPreview) {
                            URL.revokeObjectURL(testimonialPreviewImg);
                          }
                          setTestimonialPreviewImg(null);
                          setTestimonialIsLocalPreview(false);
                          setEditingTestimonialId(null);
                          setShowTestimonialForm(false);
                        }}
                        className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 text-sm"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Testimonial Accordion List */}
              <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                {testimonials.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">No testimonials available.</p>
                ) : (
                  <div className="space-y-3">
                    {testimonials.map((testimonial) => (
                      <div
                        key={testimonial._id}
                        className="bg-gray-700 dark:to-gray-700 rounded-xl shadow-md"
                      >
                        <button
                          onClick={() => setOpenTestimonialId(openTestimonialId === testimonial._id ? null : testimonial._id)}
                          className="w-full p-4 flex items-center gap-3 text-left"
                        >
                          <img
                            src={`${BASE_URL}${testimonial.img}`}
                            alt={testimonial.name}
                            className="h-16 w-16 object-cover rounded-lg"
                            onError={(e) => (e.target.src = `${BASE_URL}/placeholder.jpg`)}
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="text-gray-800 dark:text-white text-base font-medium">
                                {testimonial.name}
                              </p>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {testimonial.role}
                            </p>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <i
                                  key={i}
                                  className={`fas fa-star text-xs ${
                                    i < testimonial.stars ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"
                                  }`}
                                ></i>
                              ))}
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm truncate max-w-[200px] sm:max-w-[300px]">
                              {testimonial.desc.slice(0, 50)}
                              {testimonial.desc.length > 50 ? "..." : ""}
                            </p>
                          </div>
                          <i
                            className={`fas fa-chevron-down text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                              openTestimonialId === testimonial._id ? "rotate-180" : ""
                            }`}
                          ></i>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openTestimonialId === testimonial._id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-4 pb-4">
                            <p className="text-gray-800 dark:text-white text-sm">
                              <strong>Feedback:</strong> {testimonial.desc}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                              Created: {new Date(testimonial.createdAt).toLocaleString()}
                            </p>
                            <div className="mt-3 flex gap-2">
                              <button
                                onClick={() => {
                                  handleTestimonialEdit(testimonial);
                                  setShowTestimonialForm(true);
                                }}
                                className="text-lg text-white rounded-lg"
                              >
                                <i className="fas fa-edit" />
                              </button>
                              <button
                                onClick={() => handleTestimonialDelete(testimonial._id)}
                                className="text-white rounded-lg shadow-black"
                              >
                                <i className="fas fa-trash" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Side Navigation for Sort and Visibility (Right) */}
            <div className="w-full md:w-48 lg:w-64 mt-4 md:mt-0">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 shadow-sm">
                {/* Sort Dropdown */}
                <h4 className="text-sm font-medium text-gray-800 dark:text-white mb-2">Sort Testimonials</h4>
                <select
                  defaultValue="latest"
                  className="w-full p-2 rounded-lg border border-indigo-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-colors duration-200"
                >
                  <option value="latest">Latest</option>
                  <option value="oldest">Oldest</option>
                  <option value="a-z">A-Z</option>
                  <option value="z-a">Z-A</option>
                </select>

                {/* Visibility Management (Always Open) */}
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-800 dark:text-white mb-2">Manage Testimonial Visibility</h4>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 max-h-[calc(100vh-400px)] overflow-y-auto">
                    {testimonials.length === 0 ? (
                      <p className="text-xs text-gray-500 dark:text-gray-400 p-2">No testimonials to manage.</p>
                    ) : (
                      <div className="space-y-2">
                        {testimonials.map((testimonial) => (
                          <div key={testimonial._id} className="text-xs">
                            <p className="truncate max-w-[100px] sm:max-w-[150px] text-gray-800 dark:text-white mb-1">
                              {testimonial.name.slice(0, 20)}
                              {testimonial.name.length > 20 ? "..." : ""}
                            </p>
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 transform transition-transform duration-200 hover:scale-110"
                                defaultChecked={Math.random() > 0.5} // Placeholder for demo
                              />
                              <span className="text-gray-600 dark:text-gray-300">H</span>
                              <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 transform transition-transform duration-200 hover:scale-110"
                                defaultChecked={Math.random() > 0.5} // Placeholder for demo
                              />
                              <span className="text-gray-600 dark:text-gray-300">T</span>
                              <span className="ml-auto inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500 text-white">
                                {Math.floor(Math.random() * 3)}/2
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          )}

{/* In Action section */}
          {activeTab === "inAction" && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="space-y-4">
                <input
                  type="file"
                  accept="image/*,video/*"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                />
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                    Add
                  </button>
                  <button className="text-white rounded-lg">
                     <i className="fas fa-trash" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;