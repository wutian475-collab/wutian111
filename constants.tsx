import { Product, Service } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: '全案代运营系统',
    category: 'operation',
    description: '聚焦自媒体与电商，提供“省心托管 + AI 驱动”的全流程服务，覆盖抖音、小红书等主流平台。',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' // Dashboard / Analytics / Data
  },
  {
    id: '2',
    title: 'AI 视觉工坊',
    category: 'visual',
    description: '品牌视觉资产打造，利用 AI 视频生成技术提升内容产出效率，秒级生成营销短视频。',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80' // High-end 3D Abstract Art / Fluid
  },
  {
    id: '3',
    title: '智能客服 Agent',
    category: 'ai-agent',
    description: '24/7 全天候响应的智能客服机器人，精准理解用户意图，自动处理售后与咨询。',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80' // AI Robot Face / Interaction
  },
  {
    id: '4',
    title: '内容创作 Agent',
    category: 'ai-agent',
    description: '自动化文案撰写与脚本生成助手，深谙各大平台算法逻辑，轻松产出爆款内容。',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80' // AI Brain / Neural Network / Chip
  },
  {
    id: '5',
    title: '品牌传播矩阵',
    category: 'visual',
    description: '整合媒体资源，通过 AI 分析舆情趋势，构建全网品牌声量传播系统。',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80' // Matrix / Digital Network
  },
  {
    id: '6',
    title: '私域转化引擎',
    category: 'operation',
    description: '从公域引流到私域沉淀，智能化用户分层与社群运营，提升复购率。',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80' // Teamwork / Business Meeting
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: '代运营全案服务',
    description: '自媒体/电商全托管，含账号搭建、内容策划、数据复盘。',
    priceRange: '¥5,000 - ¥20,000 / 月',
    deliveryTime: '持续服务',
    icon: 'bar-chart'
  },
  {
    id: 's2',
    title: '商业视觉创作',
    description: 'AI 辅助视频制作、品牌 VI 设计、海报宣发物料。',
    priceRange: '¥2,000 - ¥10,000 / 项',
    deliveryTime: '3 - 7 个工作日',
    icon: 'video'
  },
  {
    id: 's3',
    title: 'AI 智能体定制',
    description: '专属企业知识库 Agent 开发，部署到企业微信或官网。',
    priceRange: '¥10,000 起 / 个',
    deliveryTime: '2 - 4 周',
    icon: 'cpu'
  }
];

export const NAV_LINKS = [
  { label: '首页', href: '#hero' },
  { label: '核心产品', href: '#products' },
  { label: '服务方案', href: '#services' },
  { label: '联系我们', href: '#contact' },
];