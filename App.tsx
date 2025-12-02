import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, CheckCircle2, 
  Cpu, Video, Users, BarChart3, 
  Instagram, Phone, Mail, Globe, Sparkles,
  Bot, PenTool, MessageSquare, Zap, TrendingUp, Clock, ShieldCheck
} from 'lucide-react';
import { Button } from './components/Button';
import { SectionTitle } from './components/SectionTitle';
import { PRODUCTS, SERVICES, NAV_LINKS } from './constants';
import { Category, FormData } from './types';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter products
  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  // Form handling
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted to 344549268@qq.com:', data);
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <Sparkles className="w-6 h-6 text-purple-500" />
            商途 AI
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <Button variant="primary" className="px-6 py-2 text-sm" onClick={() => scrollToSection('#contact')}>
              开启合作
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-gray-800">
            <div className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-lg text-slate-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button onClick={() => scrollToSection('#contact')}>开启合作</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-sm">
            <span className="text-purple-300 text-sm font-semibold tracking-wide uppercase">AI 驱动 · 降本增效 · 业绩增长</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            以 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">AI 智能体</span>
            <br />
            重构商业运营新生态
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto">
            AI 技术赋能获客｜全链路破解运营销售低效。商途 AI 为您提供“产品 + 服务 + 工具”三位一体的解决方案。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection('#products')}>
              产品介绍 <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary" onClick={() => scrollToSection('#contact')}>
              开启合作
            </Button>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
           <span className="text-xs uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 relative">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="核心产品矩阵" 
            subtitle="覆盖企业运营全生命周期，四大核心板块适配专属 AI 智能体，打造场景化与智能化兼备的产品体系。" 
          />

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
            {[
              { id: 'all', label: '全部产品' },
              { id: 'operation', label: '代运营' },
              { id: 'visual', label: '视觉创意' },
              { id: 'ai-agent', label: 'AI 智能体' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as Category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === tab.id 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/25' 
                    : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="group relative bg-[#111827] rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/50 transition-all duration-500"
              >
                {/* Image Overlay */}
                <div className="aspect-video w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-60 z-10"></div>
                  <img 
                    src={product.imageUrl} 
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Hover Color Filter */}
                  <div className="absolute inset-0 bg-purple-600/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                </div>

                <div className="p-6 relative z-30 -mt-12">
                  <div className="bg-[#1F2937] w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:bg-purple-600 transition-colors duration-300">
                    {product.category === 'operation' && <BarChart3 className="text-white" />}
                    {product.category === 'visual' && <Video className="text-white" />}
                    {product.category === 'ai-agent' && <Cpu className="text-white" />}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{product.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <a href="#contact" className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    了解详情 <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
                
                {/* Glow Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/30 rounded-2xl pointer-events-none transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Detail Section (New) */}
      <section id="ai-agents" className="py-24 bg-[#0F1420] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle 
            title="商途 AI 智能体系列" 
            subtitle="打造您的 24 小时“金牌员工”，针对运营各环节自动化执行核心业务流程，实现真正的降本增效。" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Content Creation Agent */}
            <div className="bg-[#111827] rounded-2xl border border-white/5 hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group overflow-hidden">
              {/* Agent Video */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-transparent z-10"></div>
                {/* Video Placeholder for Content Agent: AI Brain/Neural Network */}
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  poster="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-artificial-intelligence-neural-network-brain-44646-large.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="p-8 pt-0 relative z-20">
                <div className="w-16 h-16 -mt-8 bg-[#111827] rounded-2xl flex items-center justify-center mb-6 text-purple-400 shadow-lg shadow-purple-500/20 ring-4 ring-[#111827]">
                  <PenTool className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">内容创作 Agent</h3>
                <p className="text-slate-400 mb-8 h-12">
                  您的超级灵感库与文案专家，深谙各大平台算法逻辑。
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-purple-500 mt-0.5" />
                    <span className="text-sm text-slate-300">全平台脚本一键生成，效率提升 500%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Bot className="w-5 h-5 text-purple-500 mt-0.5" />
                    <span className="text-sm text-slate-300">深度学习品牌语气，保持调性一致</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-purple-500 mt-0.5" />
                    <span className="text-sm text-slate-300">实时热点追踪，轻松产出爆款内容</span>
                  </li>
                </ul>
                
                <Button variant="outline" className="w-full border-purple-500/30 text-purple-400 hover:border-purple-400 hover:text-purple-300 hover:bg-purple-900/20" onClick={() => scrollToSection('#contact')}>
                  预约演示
                </Button>
              </div>
            </div>

            {/* Operation Agent */}
            <div className="bg-[#111827] rounded-2xl border border-white/5 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group overflow-hidden">
              {/* Agent Video */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-transparent z-10"></div>
                {/* Video Placeholder for Operation: Data/Charts */}
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-stock-market-digital-graph-updates-43285-large.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="p-8 pt-0 relative z-20">
                <div className="w-16 h-16 -mt-8 bg-[#111827] rounded-2xl flex items-center justify-center mb-6 text-blue-400 shadow-lg shadow-blue-500/20 ring-4 ring-[#111827]">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">账号运营 Agent</h3>
                <p className="text-slate-400 mb-8 h-12">
                  全天候监控数据，精准优化策略，做您的智能运营官。
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                    <span className="text-sm text-slate-300">自动发布与排期，实现 7x24h 托管</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-blue-500 mt-0.5" />
                    <span className="text-sm text-slate-300">竞品数据实时分析，洞察流量密码</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-500 mt-0.5" />
                    <span className="text-sm text-slate-300">粉丝画像深度洞察，提升转化精准度</span>
                  </li>
                </ul>
                
                <Button variant="outline" className="w-full border-blue-500/30 text-blue-400 hover:border-blue-400 hover:text-blue-300 hover:bg-blue-900/20" onClick={() => scrollToSection('#contact')}>
                  预约演示
                </Button>
              </div>
            </div>

            {/* Service Agent */}
            <div className="bg-[#111827] rounded-2xl border border-white/5 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 group overflow-hidden">
              {/* Agent Video */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-transparent z-10"></div>
                {/* Video Placeholder for Service: Chat/Robot */}
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  poster="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-chat-bot-animation-on-mobile-screen-animation-27515-large.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="p-8 pt-0 relative z-20">
                <div className="w-16 h-16 -mt-8 bg-[#111827] rounded-2xl flex items-center justify-center mb-6 text-cyan-400 shadow-lg shadow-cyan-500/20 ring-4 ring-[#111827]">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">智能客服 Agent</h3>
                <p className="text-slate-400 mb-8 h-12">
                  秒级响应的金牌销售，永不离线的转化助手。
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-cyan-500 mt-0.5" />
                    <span className="text-sm text-slate-300">0 延迟极速回复，用户满意度提升 40%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Bot className="w-5 h-5 text-cyan-500 mt-0.5" />
                    <span className="text-sm text-slate-300">主动引导留资，不错过任何销售线索</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-cyan-500 mt-0.5" />
                    <span className="text-sm text-slate-300">智能情绪识别与安抚，专业处理售后</span>
                  </li>
                </ul>
                
                <Button variant="outline" className="w-full border-cyan-500/30 text-cyan-400 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/20" onClick={() => scrollToSection('#contact')}>
                  预约演示
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#0B0F19]">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="精选服务方案" 
            subtitle="从品牌塑造到流量变现，我们提供灵活且专业的服务组合，助力企业长期增值。" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id}
                className="relative bg-gradient-to-b from-[#1F2937] to-[#111827] p-1 rounded-2xl hover:translate-y-[-8px] transition-transform duration-300"
              >
                {/* Gradient Border Trick */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-2xl pointer-events-none"></div>
                
                <div className="bg-[#111827] h-full rounded-xl p-8 flex flex-col relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                    {service.icon === 'bar-chart' && <BarChart3 className="text-white w-7 h-7" />}
                    {service.icon === 'video' && <Video className="text-white w-7 h-7" />}
                    {service.icon === 'cpu' && <Cpu className="text-white w-7 h-7" />}
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-400 mb-6 flex-grow">{service.description}</p>
                  
                  <div className="space-y-4 pt-6 border-t border-gray-800">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">预算范围</span>
                      <span className="font-semibold text-blue-400">{service.priceRange}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">交付周期</span>
                      <span className="font-semibold text-white">{service.deliveryTime}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-8" onClick={() => scrollToSection('#contact')}>
                    立即预约
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full filter blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-6">准备好开启<br />您的商业增长之旅了吗？</h2>
              <p className="text-slate-400 text-lg mb-8">
                无论您是需要全案代运营，还是希望打造专属 AI 智能体，商途 AI 都在这里为您服务。填写表单，我们将在 24 小时内与您联系。
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-blue-400">
                    <Mail />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">发送邮件</p>
                    <a href="mailto:344549268@qq.com" className="text-lg font-semibold hover:text-blue-400 transition-colors">344549268@qq.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-green-400">
                    <Phone />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">电话 / 微信</p>
                    <div className="flex flex-col">
                      <a href="tel:15706672666" className="text-lg font-semibold hover:text-green-400 transition-colors">15706672666</a>
                      <span className="text-slate-300">Wechat: Qxdiy-0668</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-purple-400">
                    <Users />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">社交媒体</p>
                    <div className="flex gap-4 mt-1">
                      <a href="https://xhslink.com/m/2BeXqdyz10w" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 cursor-pointer transition-colors border-b border-transparent hover:border-pink-500">
                        小红书
                      </a>
                      <a href="https://v.douyin.com/-Zro4ztDw74/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 cursor-pointer transition-colors border-b border-transparent hover:border-cyan-400">
                        抖音
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">需求已提交</h3>
                  <p className="text-slate-400">感谢您的信任，我们会在 24 小时内通过您预留的联系方式与您取得联系。</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-300">您的姓名</label>
                      <input 
                        required 
                        type="text" 
                        name="name" 
                        id="name"
                        className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder-gray-600"
                        placeholder="请输入姓名"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact" className="text-sm font-medium text-slate-300">联系方式</label>
                      <input 
                        required 
                        type="text" 
                        name="contact" 
                        id="contact"
                        className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder-gray-600"
                        placeholder="电话 / 微信"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-sm font-medium text-slate-300">项目类型</label>
                      <select 
                        name="projectType" 
                        id="projectType"
                        className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white"
                      >
                        <option value="operation">代运营全案</option>
                        <option value="visual">视频/视觉设计</option>
                        <option value="agent">AI 智能体开发</option>
                        <option value="other">其他合作</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium text-slate-300">预算范围</label>
                      <select 
                        name="budget" 
                        id="budget"
                        className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white"
                      >
                        <option value="1w-5w">¥10,000 - ¥50,000</option>
                        <option value="5w-10w">¥50,000 - ¥100,000</option>
                        <option value="10w+">¥100,000 以上</option>
                        <option value="tbd">待定/详谈</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium text-slate-300">项目描述</label>
                    <textarea 
                      required 
                      name="description" 
                      id="description"
                      rows={4}
                      className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder-gray-600 resize-none"
                      placeholder="请简要描述您的需求或痛点..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full" disabled={formStatus === 'submitting'}>
                    {formStatus === 'submitting' ? '提交中...' : '提交需求'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B0F19] border-t border-gray-800 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
               <Sparkles className="w-6 h-6 text-purple-500" />
               <span className="text-xl font-bold text-white">商途 AI</span>
            </div>
            <div className="flex gap-8">
              {NAV_LINKS.map(link => (
                <a key={link.label} href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 text-sm text-slate-500">
            <p>&copy; 2024 商途 AI. All rights reserved.</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <Globe className="w-4 h-4" />
              <span>ICP备案号：京ICP备2024XXXXXX号-1</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;