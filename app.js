const employeeTasks = [
  {
    id: "client-visit",
    title: "客户拜访准备",
    business: "财富管理",
    owner: "宋贤群",
    status: "待你确认",
    state: "waiting",
    progress: 86,
    tags: ["客户画像", "产品匹配", "合规话术"],
    taskContent: "下午 3 点拜访华东高净值客户，需要准备一份可直接用于沟通的拜访材料，并提前确认产品推荐边界。",
    summary: [
      "已汇总客户近 90 天资产、交易、产品持仓变化。",
      "识别出 2 个潜在服务机会，并过滤 1 个不适配产品。",
      "已生成拜访提纲、沟通话术和会后纪要模板。"
    ],
    nextSteps: ["确认是否采用保守版产品话术。", "决定是否生成正式拜访 PPT。", "如需协同，可 @ 合规或产品同事确认表述。"],
    actions: ["确认使用", "继续完善", "生成材料", "邀请同事"],
    artifacts: [
      ["拜访材料初稿", "PPT · 12 页"],
      ["客户画像摘要", "PDF · 已脱敏"],
      ["会后纪要模板", "Doc · 可编辑"]
    ],
    models: [
      ["客户画像原子模型", "已完成"],
      ["产品适当性模型", "已完成"],
      ["合规话术模型", "已完成"]
    ],
    references: [
      ["CRM 历史沟通记录", "引用 18 条"],
      ["产品风险等级库", "版本 2026.07"],
      ["客户 KYC 档案", "权限校验通过"]
    ],
    conversation: [
      ["system", "AI 已完成客户拜访材料预处理，当前等待你确认是否采用推荐话术。"],
      ["ai", "建议本次拜访重点围绕资产配置再平衡、近期权益仓位波动和低风险现金管理需求展开。"],
      ["user", "把产品推荐部分再保守一点，避免承诺收益。"],
      ["ai", "已调整为风险揭示优先的表达，并移除可能被理解为收益承诺的表述。"]
    ]
  },
  {
    id: "compliance-review",
    title: "产品推荐材料合规审查",
    business: "合规风控",
    owner: "产品中心",
    status: "发现 2 个风险点",
    state: "risk",
    progress: 72,
    tags: ["适当性", "敏感表述", "证据链"],
    taskContent: "产品中心提交了一份客户推荐材料，需要在发送客户前完成适当性、收益表述和免责声明检查。",
    summary: [
      "检测到 1 处收益表述偏强，建议替换为中性描述。",
      "发现客户风险等级与产品风险等级需要二次确认。",
      "已标出需要补充免责声明的位置。"
    ],
    nextSteps: ["查看 2 个风险点并确认修改建议。", "选择一键修订或提交人工复核。", "必要时 @ 合规同事一起确认。"],
    actions: ["查看风险", "一键修订", "提交复核", "邀请合规"],
    artifacts: [
      ["合规审查报告", "PDF · 3 个标注"],
      ["修订版材料", "PPT · 待确认"]
    ],
    models: [
      ["适当性匹配模型", "需人工确认"],
      ["营销材料审查模型", "已完成"],
      ["制度条款检索模型", "已完成"]
    ],
    references: [
      ["证券期货投资者适当性制度", "引用 5 条"],
      ["公司营销材料规范", "版本 2026.06"]
    ],
    conversation: [
      ["system", "AI 在产品推荐材料中发现 2 个风险点，建议先处理后再提交审批。"],
      ["ai", "第 4 页“稳健增值”容易被理解为暗示收益，建议改为“风险收益特征相对稳健”。"]
    ]
  },
  {
    id: "ib-weekly",
    title: "投行项目周报",
    business: "投资银行",
    owner: "项目组",
    status: "AI 已生成初稿",
    state: "done",
    progress: 94,
    tags: ["项目进度", "底稿", "监管反馈"],
    taskContent: "本周投行项目例会前，需要形成项目周报，覆盖进度、卡点、下周计划和需要负责人协调的事项。",
    weeklyHighlights: [
      "项目整体进度正常，底稿完成度约 88%，核心申报材料已进入负责人复核。",
      "本周新增监管反馈 3 条，其中 2 条已完成回复草稿，1 条需审计机构补充说明。",
      "下周重点是客户盖章、审计补充说明和内核会议材料定稿。"
    ],
    summary: [
      "已拉取项目计划、客户邮件、底稿清单和监管反馈。",
      "自动生成本周进展、下周计划和待协调事项。",
      "识别出 1 个卡点：审计机构仍未提交补充说明。"
    ],
    nextSteps: ["确认周报初稿是否可发送。", "补充审计机构卡点说明。", "决定是否发给项目负责人。"],
    actions: ["确认周报", "补充说明", "发给负责人", "归档"],
    artifacts: [
      ["项目周报", "Doc · 1,860 字"],
      ["卡点清单", "Table · 4 项"]
    ],
    sourceFile: {
      title: "XX 股份 IPO 项目周报源文件",
      meta: "源文件 · 投行项目管理系统 · 同步于 12:10",
      sections: [
        ["一、本周进展", "完成申报材料第 3 轮修订；客户已确认财务数据口径；律师补充核查记录已归档。"],
        ["二、监管反馈", "本周收到 3 条反馈意见，其中 2 条已形成回复草稿，剩余 1 条涉及审计机构补充说明。"],
        ["三、当前卡点", "审计机构尚未提交收入确认补充说明，可能影响内核会议材料最终定稿。"],
        ["四、下周计划", "完成客户盖章、审计补充说明、内核会议材料定稿，并同步更新底稿目录。"]
      ]
    },
    models: [
      ["项目进度原子模型", "已完成"],
      ["底稿完整性模型", "已完成"],
      ["监管反馈归纳模型", "已完成"]
    ],
    references: [
      ["项目管理系统", "同步于 12:10"],
      ["邮件往来", "引用 9 封"],
      ["底稿目录", "完成度 88%"]
    ],
    conversation: [
      ["system", "AI 已生成投行项目周报初稿，等待项目负责人确认。"],
      ["ai", "本周核心卡点集中在审计补充说明和客户盖章安排，建议在周会中优先协调。"]
    ]
  },
  {
    id: "meeting-minutes",
    title: "昨日会议纪要待确认",
    business: "协同办公",
    owner: "项目秘书 AI",
    status: "待你确认",
    state: "waiting",
    progress: 80,
    tags: ["会议纪要", "待办拆解", "协同"],
    taskContent: "昨日项目沟通会已结束，需要把会议结论转成可执行待办，并确认责任人和截止时间。",
    summary: [
      "已从录音和会议聊天中整理 6 条结论。",
      "拆解出 5 条行动项，并匹配初步责任人。",
      "其中 2 条行动项需要你确认截止时间。"
    ],
    nextSteps: ["确认 5 条行动项是否准确。", "调整责任人和截止时间。", "确认后发送到项目群。"],
    actions: ["确认待办", "调整责任人", "发到群聊", "邀请同事"],
    artifacts: [
      ["会议纪要", "Doc · 8 条结论"],
      ["行动项清单", "Task · 5 项"]
    ],
    models: [
      ["会议摘要模型", "已完成"],
      ["任务拆解模型", "已完成"]
    ],
    references: [
      ["会议录音", "42 分钟"],
      ["会议聊天记录", "引用 23 条"]
    ],
    conversation: [
      ["system", "AI 已整理昨日会议纪要，等待你确认行动项和责任人。"],
      ["ai", "建议将“补充客户风险测评材料”的责任人设为王敏，截止时间为明天下午 16:00。"]
    ]
  },
  {
    id: "market-alert",
    title: "新能源板块异动解读",
    business: "研究所",
    owner: "投研助理 AI",
    status: "AI 处理中",
    state: "running",
    progress: 48,
    tags: ["行情", "舆情", "晨会观点"],
    taskContent: "新能源板块出现盘中异动，需要快速判断原因，并形成可对客户沟通的短评。",
    summary: [
      "已捕捉新能源板块盘中异动和相关公司公告。",
      "正在交叉验证资金流、机构观点和产业链价格数据。",
      "预计 2 分钟后生成客户沟通短评。"
    ],
    nextSteps: ["等待 AI 完成资金面验证。", "选择是否生成客户短评。", "如需深挖，可继续追加研究口径。"],
    actions: ["查看进度", "加深研究", "生成短评", "订阅提醒"],
    artifacts: [
      ["异动快照", "Chart · 实时"],
      ["公告摘要", "Doc · 6 条"]
    ],
    models: [
      ["行情异动模型", "运行中"],
      ["新闻舆情模型", "运行中"],
      ["行业景气模型", "排队中"]
    ],
    references: [
      ["行情数据", "实时流"],
      ["公告库", "今日新增 14 条"]
    ],
    conversation: [
      ["system", "AI 正在分析新能源板块异动。"],
      ["ai", "目前初步判断异动与产业链价格预期修复、龙头公司订单公告有关，仍在验证资金面数据。"]
    ]
  }
];

const leaderTasks = [
  {
    id: "leader-approval",
    title: "待领导审批事项",
    business: "审批决策",
    owner: "审批协同 Agent",
    status: "3 项待审批",
    state: "waiting",
    progress: 84,
    taskContent: "系统已汇总今日需要领导审批的事项，按紧急程度、影响范围和是否阻塞业务推进排序。",
    summary: [
      "发现 3 项待领导审批事项，其中 1 项影响今日客户材料外发。",
      "AI 已补齐审批背景、风险点、相关责任人和建议处理口径。",
      "其中 2 项可以直接审批通过，1 项建议补充合规意见后再批。"
    ],
    nextSteps: ["确认客户材料外发审批是否通过。", "要求合规补充第 2 项说明。", "批量生成审批意见并留痕。"],
    actions: ["查看审批", "同意通过", "要求补充", "批量处理"],
    artifacts: [["审批事项清单", "Table · 3 项"], ["客户材料外发申请", "PDF · 待批"], ["审批意见草稿", "Doc · 可编辑"]],
    models: [["审批优先级模型", "已完成"], ["风险摘要模型", "已完成"], ["合规意见匹配模型", "已完成"]],
    references: [["审批系统", "同步于 14:20"], ["材料外发记录", "引用 5 条"], ["责任人说明", "引用 3 条"]],
    conversation: [
      ["system", "AI 已将今日待审批事项按紧急程度排序。"],
      ["ai", "建议优先处理客户材料外发审批，该事项会影响下午 16:00 前的客户沟通安排。"]
    ]
  },
  {
    id: "leader-risk-alert",
    title: "高风险事项预警",
    business: "风险与合规",
    owner: "风险数字员工",
    status: "发现 4 项需关注",
    state: "risk",
    progress: 82,
    taskContent: "系统从合规审查、客户投诉、异常交易、舆情和监管反馈中汇总出今日需要领导关注的风险事项。",
    summary: [
      "发现 2 份营销材料存在收益表述偏激进风险。",
      "识别 1 个客户投诉趋势上升信号，涉及产品预期沟通不充分。",
      "投行项目监管反馈中有 1 项等待审计机构补充说明，可能影响内核节奏。"
    ],
    nextSteps: ["确认哪些风险需要立即升级处理。", "指派责任人跟进投诉和材料修订。", "生成风险晨报并发送给管理团队。"],
    actions: ["升级处理", "指派责任人", "生成晨报", "邀请合规"],
    artifacts: [["风险事项清单", "Table · 4 项"], ["营销材料审查摘录", "PDF · 标注版"], ["投诉趋势摘要", "Doc · 今日更新"]],
    models: [["合规风险识别模型", "已完成"], ["投诉趋势归因模型", "已完成"], ["异常交易预警模型", "持续监控"]],
    references: [["合规审查系统", "引用 7 条"], ["客户服务工单", "引用 11 条"], ["监管反馈台账", "引用 3 条"]],
    conversation: [
      ["system", "AI 已将今日风险事项按影响范围和紧急程度排序。"],
      ["ai", "建议优先处理营销材料收益表述和投诉趋势，两项都可能影响客户沟通与合规评价。"]
    ]
  },
  {
    id: "leader-project-board",
    title: "重点项目推进看板",
    business: "项目管理",
    owner: "项目调度 Agent",
    status: "2 项存在卡点",
    state: "waiting",
    progress: 76,
    taskContent: "自动汇总投行、机构、财富重点项目进展，识别进度、责任人、外部依赖和需要领导介入的节点。",
    summary: [
      "投行 IPO 项目底稿完成度 88%，审计机构补充说明仍未返回。",
      "机构客户综合服务方案已完成初稿，等待产品、投研和合规联合确认。",
      "财富重点客户资产配置方案已生成，但客户风险测评需更新。"
    ],
    nextSteps: ["决定是否对审计机构补充说明发起督办。", "确认机构客户方案跨部门评审时间。", "安排财富客户服务动作。"],
    actions: ["发起督办", "安排评审", "分派跟进", "生成周报"],
    artifacts: [["重点项目看板", "Board · 12 项"], ["项目卡点清单", "Table · 2 项"], ["负责人跟进稿", "Doc · 可发送"]],
    models: [["项目进度预测模型", "已完成"], ["跨部门依赖识别模型", "已完成"], ["督办优先级模型", "已完成"]],
    references: [["项目管理系统", "同步于 10:20"], ["邮件往来", "引用 16 封"], ["会议纪要", "引用 4 份"]],
    conversation: [
      ["system", "AI 已生成重点项目推进看板。"],
      ["ai", "当前最需要领导介入的是审计机构补充说明和机构客户方案跨部门评审排期。"]
    ]
  },
  {
    id: "leader-meeting-schedule",
    title: "今日会议安排提醒",
    business: "会议与日程",
    owner: "会议秘书 AI",
    status: "4 场会议待关注",
    state: "done",
    progress: 92,
    displayMode: "meetingSchedule",
    meetings: [
      {
        time: "09:30-10:00",
        title: "经营碰头会",
        location: "12F 经营会议室",
        level: "重点",
        note: "先讨论高风险事项，再确认项目卡点和审批事项。",
        prep: "会前查看风险摘要、项目卡点清单和客户材料外发审批。"
      },
      {
        time: "10:20-10:50",
        title: "重点客户沟通会",
        location: "财富中心 3 号会议室",
        level: "需提前确认",
        note: "客户材料外发口径需要领导提前确认。",
        prep: "确认适当性说明是否补充完整，决定材料是否可外发。"
      },
      {
        time: "11:00-11:40",
        title: "机构客户方案评审会",
        location: "线上会议",
        level: "常规",
        note: "产品、投研、合规三方意见已合并，需形成最终对客版本。",
        prep: "关注服务方案中的后续跟进动作和责任人。"
      },
      {
        time: "14:30-15:00",
        title: "投行项目例会",
        location: "投行项目室",
        level: "卡点跟进",
        note: "IPO 项目审计补充说明仍未返回，可能影响内核材料定稿。",
        prep: "追问审计机构返回时间，确认是否需要领导发起督办。"
      }
    ],
    taskContent: "AI 已汇总领导今日日程、会议材料、参会人准备情况和需要提前拍板的问题，把原会议准备事项合并到会议安排中。",
    summary: [
      "今日剩余 4 场会议，其中 2 场需要提前查看材料。",
      "09:30 经营碰头会已生成议程、风险摘要和项目卡点清单。",
      "11:00 客户方案评审会有 1 项审批意见需领导提前确认。"
    ],
    nextSteps: ["查看 09:30 经营碰头会议程。", "确认 11:00 客户方案评审审批意见。", "生成并发送会前提醒。"],
    actions: ["查看日程", "确认意见", "生成材料", "发送提醒"],
    artifacts: [["今日会议安排", "Calendar · 4 场"], ["经营碰头会议程", "Doc · 5 项"], ["会前提醒", "IM · 待发送"]],
    models: [["日程摘要模型", "已完成"], ["会议材料准备模型", "已完成"], ["决策问题提炼模型", "已完成"]],
    references: [["领导日历", "今日同步"], ["会议材料", "引用 6 份"], ["风险预警清单", "引用 4 项"]],
    conversation: [
      ["system", "AI 已整理今日会议安排和会前准备材料。"],
      ["ai", "建议优先查看 09:30 经营碰头会材料，并在 11:00 客户方案评审前确认审批意见。"]
    ]
  }
];

const roleTaskTemplates = {
  employee: employeeTasks,
  leader: leaderTasks
};

const roleTasks = {
  employee: [],
  leader: []
};

let currentRole = "employee";
let customPrompts = { employee: [], leader: [] };
let promptOrders = { employee: null, leader: null };
let hiddenPresets = { employee: [], leader: [] };
let tasks = roleTasks[currentRole];

let activeTaskId = tasks[0]?.id || "";
let draggedTaskId = null;
let incomingInvitationCreated = false;
let pendingCloseTaskId = null;
let historyFilter = "all";
const closedTasks = [
  {
    title: "监管问询回复",
    status: "unfinished",
    time: "昨日",
    note: "已引用 8 份底稿，仍需补充说明。",
    dot: "amber",
    task: {
      id: "history-regulatory-reply",
      title: "监管问询回复",
      business: "投资银行",
      owner: "项目组",
      status: "未完成",
      state: "waiting",
      taskContent: "针对监管问询中关于收入确认和客户集中度的问题，需要整理回复材料并补充底稿引用。",
      summary: [
        "AI 已梳理 8 份相关底稿，并标出 3 处可直接引用的证据。",
        "收入确认部分已形成回复草稿，客户集中度部分仍需补充说明。",
        "审计机构补充说明尚未返回，因此任务保留为未完成。"
      ],
      nextSteps: ["补充客户集中度说明。", "等待审计机构确认收入确认口径。", "复核后提交项目负责人。"],
      actions: ["补充说明", "催办审计", "提交负责人"],
      artifacts: [
        ["监管问询回复草稿", "Doc · 2,430 字"],
        ["底稿引用清单", "Table · 8 份"],
        ["待补充问题清单", "Task · 3 项"]
      ],
      models: [
        ["监管问询归纳模型", "已完成"],
        ["底稿证据链模型", "已完成"],
        ["收入确认核查模型", "等待补充"]
      ],
      references: [
        ["审计底稿", "引用 8 份"],
        ["客户合同台账", "已关联"],
        ["历史问询案例", "引用 2 个"]
      ],
      conversation: [
        ["user", "帮我整理监管问询里收入确认和客户集中度的问题，先生成回复草稿。"],
        ["ai", "已读取问询函、底稿目录和客户合同台账。我会先拆成收入确认、客户集中度、补充证据三部分处理。"],
        ["ai", "收入确认部分已形成草稿，引用了 5 份审计底稿；客户集中度部分目前证据不足，需要补充前五大客户变动说明。"],
        ["user", "客户集中度这块先标成待补充，不要强行生成结论。"],
        ["ai", "已处理：客户集中度段落保留为待补充状态，并在草稿中标注需要审计机构补充说明。"]
      ]
    }
  },
  {
    title: "高净值客户资产异动",
    status: "done",
    time: "周一",
    note: "已完成客户跟进并归档。",
    dot: "green",
    task: {
      id: "history-asset-change",
      title: "高净值客户资产异动",
      business: "财富管理",
      owner: "宋贤群",
      status: "已完成",
      state: "done",
      taskContent: "客户账户出现较大资金转出，需要判断是否存在服务风险，并形成跟进记录。",
      summary: [
        "AI 已识别资产转出主要来自现金管理产品到期赎回。",
        "客户经理已完成电话回访，确认资金用于企业短期周转。",
        "已生成客户跟进纪要并归档。"
      ],
      nextSteps: ["任务已完成，无需继续处理。"],
      actions: ["查看纪要"],
      artifacts: [
        ["客户跟进纪要", "Doc · 已归档"],
        ["资产异动分析", "PDF · 已归档"]
      ],
      models: [
        ["客户资产异动模型", "已完成"],
        ["客户画像模型", "已完成"],
        ["服务风险识别模型", "已完成"]
      ],
      references: [
        ["客户资产流水", "已脱敏"],
        ["电话回访记录", "已留痕"],
        ["CRM 服务记录", "已更新"]
      ],
      conversation: [
        ["system", "客户资产出现大额转出，AI 已自动生成风险提醒。"],
        ["ai", "资金转出主要来自现金管理产品到期赎回，短期服务风险中等，建议今日完成客户回访。"],
        ["user", "已电话联系客户，资金用于企业短期周转，客户仍保留后续配置需求。"],
        ["ai", "已生成客户跟进纪要，并将服务风险状态调整为已确认、低风险。"]
      ]
    }
  }
];

const aiToolCatalog = [
  {
    id: "doubao",
    title: "豆包",
    provider: "字节跳动",
    url: "https://www.doubao.com/chat/",
    accent: "#6d5dfc",
    placeholder: "有什么我能帮你的吗？",
    sampleUser: "帮我把客户拜访材料再润色得更正式一点。",
    sampleAi: "可以。我会保留原有事实依据，重点优化表达、结构和风险提示语气。"
  },
  {
    id: "zhipu",
    title: "智谱清言",
    provider: "智谱 AI",
    url: "https://chatglm.cn/",
    accent: "#3158ff",
    placeholder: "和 GLM 对话",
    sampleUser: "帮我整理监管回复材料的大纲。",
    sampleAi: "建议分为问题拆解、事实依据、底稿引用、回复口径和待补充事项五部分。"
  },
  {
    id: "deepseek",
    title: "DeepSeek",
    provider: "DeepSeek",
    url: "https://chat.deepseek.com/",
    accent: "#1b9aaa",
    placeholder: "Message DeepSeek",
    sampleUser: "帮我分析新能源板块异动。",
    sampleAi: "我会从行情、资金、公告和产业链价格四个维度进行交叉分析。"
  },
  {
    id: "tongyi",
    title: "通义千问",
    provider: "阿里云",
    url: "https://tongyi.aliyun.com/qianwen/",
    accent: "#0f9f6e",
    placeholder: "向通义提问",
    sampleUser: "生成一版会议纪要。",
    sampleAi: "已根据会议主题整理结论、待办、责任人和截止时间。"
  },
  {
    id: "kimi",
    title: "Kimi",
    provider: "月之暗面",
    url: "https://www.kimi.com/",
    accent: "#101828",
    placeholder: "问 Kimi",
    sampleUser: "阅读这份项目材料并总结风险点。",
    sampleAi: "已提取项目背景、关键风险、待补充材料和建议沟通问题。"
  },
  {
    id: "trae",
    title: "Trae",
    provider: "字节跳动",
    url: "https://work.trae.cn/",
    accent: "#2563eb",
    placeholder: "和 Trae 对话",
    sampleUser: "帮我生成一个证券工作台页面原型。",
    sampleAi: "我会根据需求拆解页面结构、交互流程和可演示原型实现。"
  }
];

let aiToolCards = [];
let cardOrder = [...tasks.map((task) => task.id), ...aiToolCards.map((tool) => tool.id)];
const roleCardOrders = {
  employee: [...cardOrder],
  leader: [...aiToolCards.map((tool) => tool.id)]
};

const quickPromptPresets = {
  employee: [
    ["客户拜访", "帮我准备下午拜访华东高净值客户的材料"],
    ["合规检查", "检查这份产品推荐材料是否存在适当性风险"],
    ["生成材料", "根据当前客户和项目上下文生成一版正式材料"],
    ["会议纪要", "整理昨日会议纪要并拆解待办事项"],
    ["更多发现", "shortcuts"]
  ],
  leader: [
    ["审批事项", "汇总今日需要我审批的事项，按紧急程度给出处理建议"],
    ["风险预警", "梳理当前需要我关注的高风险事项和处理建议"],
    ["项目督办", "生成重点项目推进和卡点督办清单"],
    ["会议安排", "汇总我今天剩余会议安排、会前材料和需要提前确认的问题"],
    ["更多发现", "shortcuts"]
  ]
};

const emptyWorkbenchRecommendations = {
  employee: [
    { category: "机会识别", items: [
      ["帮我从近期企业客户线索里识别 ABS 业务机会", "梳理近期客户和项目线索，识别 ABS 业务机会并给出推进建议", "ABS机会"],
      ["根据机构客户关注点，生成综合服务机会建议", "根据机构客户近期关注点，生成投研、交易和综合服务建议", "机构服务"]
    ]},
    { category: "客户服务", items: [
      ["结合客户资产结构，生成一版信托理财配置建议", "结合客户资产结构，生成信托理财业务适配建议和风险提示", "信托配置"],
      ["整理融资融券业务操作指引和客户沟通口径", "整理融资融券业务操作指引、适当性要求和客户沟通口径", "融资融券"],
      ["汇总研究所最新研报，提炼可转发客户的观点", "汇总研究所最新研报观点，并提炼可用于客户沟通的要点", "研报观点"],
      ["查看最新理财产品发售信息，并筛选可跟进客户", "查看最新理财产品发售信息，筛选适合跟进的客户范围", "产品筛选"]
    ]},
    { category: "风险与政策", items: [
      ["整理公募基金费率新规对客户服务的影响", "整理公募基金费率新规要点，并说明对客户服务和产品销售的影响", "费率新规"],
      ["识别近期资产异动客户，生成流失挽回动作", "识别近期资产异动客户，生成客户挽回动作和沟通材料", "客户挽回"]
    ]}
  ],
  leader: [
    { category: "监管与行业", items: [
      ["汇总最新监管资讯，提炼管理层需要关注的动作", "汇总最新监管资讯，提炼需要管理层关注的影响和应对动作", "监管资讯"],
      ["整理证券行业最新动态，分析对公司业务的影响", "整理证券行业最新动态，分析对公司业务和风险管理的影响", "行业动态"]
    ]},
    { category: "经营分析", items: [
      ["汇总各部门业务开展情况，识别亮点和卡点", "汇总各部门近期业务开展情况，识别亮点、卡点和需要协调的问题", "部门汇总"],
      ["分析公司最新费用控制情况和异常支出线索", "汇总公司最新费用控制情况，识别异常支出和优化建议", "费用分析"]
    ]},
    { category: "管理与决策", items: [
      ["查看重点项目最新进展和需要我介入的事项", "汇总重点项目最新进展、责任人、卡点和需要领导介入的事项", "项目督办"],
      ["梳理今日待审批事项，并按紧急程度排序", "梳理今日待审批事项，按紧急程度和业务影响给出处理建议", "待审事项"],
      ["汇总当前高风险事项，给出优先处置顺序", "汇总当前高风险事项，按影响范围和处置优先级排序", "风险处置"],
      ["整理今日会议安排和会前需要确认的问题", "整理今日会议安排、会前材料和需要提前确认的决策问题", "会议安排"]
    ]}
  ]
};

const lane = document.getElementById("taskLane");
const lanePrev = document.getElementById("lanePrev");
const laneNext = document.getElementById("laneNext");
const composerForm = document.getElementById("composerForm");
const composerInput = document.getElementById("composerInput");
const focusView = document.getElementById("focusView");
const focusTitle = document.getElementById("focusTitle");
const focusMeta = document.getElementById("focusMeta");
const focusStatus = document.getElementById("focusStatus");
const conversation = document.getElementById("conversation");
const artifactList = document.getElementById("artifactList");
const modelList = document.getElementById("modelList");
const referenceList = document.getElementById("referenceList");
const toast = document.getElementById("toast");
const refreshAutopilotTasksButton = document.getElementById("refreshAutopilotTasks");
const sourceModal = document.getElementById("sourceModal");
const sourceTitle = document.getElementById("sourceTitle");
const sourceContent = document.getElementById("sourceContent");
const historyList = document.getElementById("historyList");
const closeTaskModal = document.getElementById("closeTaskModal");
const closeTaskText = document.getElementById("closeTaskText");
const toolConfigModal = document.getElementById("toolConfigModal");
const toolConfigList = document.getElementById("toolConfigList");
const quickPrompts = document.getElementById("quickPrompts");
const shortcutMenu = document.getElementById("shortcutMenu");

function stateClass(state) {
  return {
    running: "state-running",
    waiting: "state-waiting",
    risk: "state-risk",
    done: "state-done"
  }[state];
}

function renderTaskCard(task) {
  return `
      <article class="task-card ${task.invitation ? "invited-card" : ""} ${task.unreadDone ? "unread-done" : ""}" id="card-${task.id}" data-card-id="${task.id}">
        <div class="task-head">
          <div class="task-head-row">
            <div class="title-wrap">
              <h3 class="task-title">${task.title}</h3>
              <div class="task-meta">
                <span class="tag">${task.business}</span>
                <span class="tag">${task.owner}</span>
                ${task.invitation ? `<span class="tag invite-tag">协同邀请</span>` : ""}
                ${task.unreadDone ? `<span class="tag unread-tag">AI 已回复待查看</span>` : ""}
              </div>
            </div>
            <div class="task-head-actions">
              <div class="task-icon-row">
                <button class="task-icon-button" data-expand="${task.id}" aria-label="全屏展开">⤢</button>
                <button class="task-icon-button pin-button ${task.pinned ? "active" : ""}" data-pin="${task.id}" aria-label="钉住任务">⌖</button>
                <button class="task-icon-button" data-close-task="${task.id}" aria-label="关闭任务">×</button>
              </div>
              <span class="task-state ${stateClass(task.state)}">${task.status}</span>
            </div>
          </div>
        </div>
        <div class="task-body">
          ${renderTaskBody(task)}
        </div>
        <div class="task-actions">
          <form class="card-chat" data-card-chat="${task.id}">
            <textarea rows="1" placeholder="在当前任务中继续输入..."></textarea>
            <button type="submit" aria-label="发送">↑</button>
          </form>
        </div>
      </article>`;
}

function renderEmptyWorkbench() {
  const recommendations = emptyWorkbenchRecommendations[currentRole] || [];
  const title = "输入信息开启工作";
  const titleChars = title
    .split("")
    .map(
      (ch, i) =>
        `<span class="title-char" style="animation-delay:${i * 70}ms">${ch}</span>`
    )
    .join("");
  return `
    <div class="empty-workbench">
      <h2 class="typing-title">${titleChars}</h2>
      <div class="empty-recommendations">
        ${recommendations
          .flatMap((group) => group.items)
          .map(
            ([label, prompt]) => `
              <button type="button" data-empty-prompt="${prompt}">${label}</button>`
          )
          .join("")}
      </div>
    </div>`;
}

function renderTasks() {
  const previousLaneScroll = lane.scrollLeft;
  updateRefreshButtonState();
  const cards = getWorkbenchCards();
  lane.closest(".task-board")?.classList.toggle("empty", !cards.length);
  lane.innerHTML = cards.length
    ? cards.map((task) => (task.type === "aiTool" ? renderAiToolCard(task) : renderTaskCard(task))).join("")
    : renderEmptyWorkbench();

  lane.querySelectorAll("[data-empty-prompt]").forEach((button) => {
    button.addEventListener("click", () => {
      const prompt = button.dataset.emptyPrompt;
      composerInput.value = "";
      createTaskFromPrompt(prompt);
    });
  });

  bindTaskBodyActions(lane);

  document.querySelectorAll("[data-expand]").forEach((button) => {
    button.addEventListener("click", (event) => {
      openTask(event.currentTarget.dataset.expand);
    });
  });

  document.querySelectorAll("[data-pin]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleTaskPin(event.currentTarget.dataset.pin);
    });
  });

  document.querySelectorAll("[data-close-task]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openCloseTaskDialog(event.currentTarget.dataset.closeTask, event.currentTarget);
    });
  });

  document.querySelectorAll("[data-open-tool]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openAiTool(event.currentTarget.dataset.openTool);
    });
  });

  document.querySelectorAll("[data-pin-tool]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleAiToolPin(event.currentTarget.dataset.pinTool);
    });
  });

  document.querySelectorAll("[data-remove-tool]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      removeAiTool(event.currentTarget.dataset.removeTool);
    });
  });

  document.querySelectorAll("[data-tool-frame]").forEach((frame) => {
    frame.addEventListener("load", () => preserveLanePosition(() => updateLaneArrows()));
    frame.addEventListener("focus", () => preserveLanePosition(), true);
  });

  document.querySelectorAll("[data-card-chat]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const taskId = event.currentTarget.dataset.cardChat;
      const input = event.currentTarget.querySelector("textarea");
      sendTaskMessage(taskId, input.value, { source: "card" });
      input.value = "";
    });
  });

  document.querySelectorAll(".task-head").forEach((head) => {
    const card = head.closest(".task-card");
    const taskId = card.dataset.cardId || card.id.replace("card-", "");
    head.setAttribute("draggable", "true");

    head.addEventListener("dragstart", (event) => {
      if (event.target.closest("button")) {
        event.preventDefault();
        return;
      }
      draggedTaskId = taskId;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", draggedTaskId);
      document.getElementById(`card-${draggedTaskId}`)?.classList.add("dragging");
    });

    head.addEventListener("dragend", () => {
      document.querySelectorAll(".task-card").forEach((card) => {
        card.classList.remove("dragging", "drag-over");
      });
      draggedTaskId = null;
    });
  });

  document.querySelectorAll(".task-card").forEach((card) => {
    card.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (!draggedTaskId || card.id === `card-${draggedTaskId}`) return;
      card.classList.add("drag-over");
    });

    card.addEventListener("dragleave", () => {
      card.classList.remove("drag-over");
    });

    card.addEventListener("drop", (event) => {
      event.preventDefault();
      const targetId = card.dataset.cardId || card.id.replace("card-", "");
      reorderTasks(draggedTaskId || event.dataTransfer.getData("text/plain"), targetId);
    });

    card.addEventListener("click", () => clearUnreadDone(card.dataset.cardId || card.id.replace("card-", "")));
  });

  applyCardOrderStyles();
  lane.scrollLeft = previousLaneScroll;
  window.setTimeout(updateLaneArrows, 0);
}

function getWorkbenchCards() {
  syncCardOrder();
  return cardOrder.map(getWorkbenchCardById).filter(Boolean);
}

function getWorkbenchCardById(id) {
  return tasks.find((task) => task.id === id) || aiToolCards.find((tool) => tool.id === id);
}

function syncCardOrder() {
  const allCards = [...tasks, ...aiToolCards];
  const validIds = new Set(allCards.map((card) => card.id));
  cardOrder = cardOrder.filter((id) => validIds.has(id));

  allCards.forEach((card) => {
    if (!cardOrder.includes(card.id)) cardOrder.push(card.id);
  });
  roleCardOrders[currentRole] = [...cardOrder];
}

function removeCardFromOrder(id) {
  cardOrder = cardOrder.filter((cardId) => cardId !== id);
  roleCardOrders[currentRole] = [...cardOrder];
}

function applyCardOrderStyles() {
  cardOrder.forEach((id, index) => {
    const card = document.getElementById(`card-${id}`);
    if (card) card.style.order = String(index);
  });
}

function preserveLanePosition(callback) {
  const previousLaneScroll = lane.scrollLeft;
  callback?.();
  lane.scrollLeft = previousLaneScroll;
  window.requestAnimationFrame(() => {
    lane.scrollLeft = previousLaneScroll;
  });
  window.setTimeout(() => {
    lane.scrollLeft = previousLaneScroll;
  }, 80);
}

function renderQuickPrompts() {
  quickPrompts.querySelectorAll(".role-prompt").forEach((button) => button.remove());
  const quickAddWrap = document.querySelector(".quick-add-wrap");

  const hidden = hiddenPresets[currentRole] || [];
  const presetItems = quickPromptPresets[currentRole]
    .filter(([, value]) => !hidden.includes(value))
    .map(([label, value]) => ({ label, value, key: value, isCustom: false }));
  const customItems = (customPrompts[currentRole] || []).map(({ id, label, prompt }) => ({
    label, value: prompt, key: id, isCustom: true, customId: id,
  }));
  const allItems = [...presetItems, ...customItems];

  const order = promptOrders[currentRole];
  let orderedItems;
  if (order) {
    orderedItems = order.map((key) => allItems.find((it) => it.key === key)).filter(Boolean);
    allItems.forEach((it) => { if (!order.includes(it.key)) orderedItems.push(it); });
  } else {
    orderedItems = allItems;
  }

  orderedItems.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "role-prompt" + (item.isCustom ? " custom-prompt" : "");
    button.dataset.promptKey = item.key;
    if (item.value === "shortcuts") {
      button.dataset.shortcuts = "true";
    } else if (item.isCustom) {
      button.dataset.customPrompt = item.value;
      button.dataset.customId = item.customId;
    } else {
      button.dataset.prompt = item.value;
    }
    button.textContent = item.label;
    const badge = document.createElement("span");
    badge.className = "prompt-delete-badge";
    button.appendChild(badge);
    quickPrompts.insertBefore(button, quickAddWrap);
  });
}

function generateShortLabel(prompt) {
  const topics = [
    "ABS", "两融", "融资融券", "信托", "基金", "理财", "研报", "产品",
    "客户", "资产", "风险", "审批", "费用", "项目", "会议",
    "监管", "行业", "部门", "配置", "沟通", "材料", "纪要",
    "督办", "预警", "异动", "新规", "费率", "业务", "机会",
  ];
  const actions = ["分析", "整理", "汇总", "梳理", "识别", "生成", "检查", "准备", "安排", "筛选", "挽回"];
  const foundTopics = topics.filter((t) => prompt.includes(t));
  const foundAction = actions.find((a) => prompt.includes(a));
  if (foundTopics.length >= 1 && foundAction) {
    return (foundTopics[0] + foundAction).slice(0, 6);
  }
  if (foundTopics.length >= 2) {
    return foundTopics.slice(0, 2).join("").slice(0, 6);
  }
  if (foundTopics.length === 1) {
    return foundTopics[0].slice(0, 6);
  }
  return prompt.replace(/^(帮我|请|帮|来)/, "").slice(0, 4);
}

function toggleManageMode() {
  const isOn = quickPrompts.classList.toggle("manage-mode");
  if (isOn) {
    showToast("点击 - 号移除快捷气泡，长按可拖拽排序");
  } else {
    showToast("已退出管理");
  }
}

function addCustomPrompt(shortLabel, prompt) {
  if ((customPrompts[currentRole] || []).some((p) => p.prompt === prompt)) {
    showToast("该提示词已添加");
    return;
  }
  customPrompts[currentRole] = customPrompts[currentRole] || [];
  customPrompts[currentRole].push({ id: `cp_${Date.now()}`, label: shortLabel, prompt });
  renderQuickPrompts();
  showToast(`已添加「${shortLabel}」`);
}

function renderShortcutMenu() {
  const groups = emptyWorkbenchRecommendations[currentRole] || [];
  shortcutMenu.innerHTML = groups
    .map(
      (group) => `
        <div class="shortcut-group">
          <p class="shortcut-group-label">${group.category}</p>
          ${group.items
            .map(
              ([label, prompt, shortLabel]) => `
            <div class="shortcut-item">
              <button type="button" data-shortcut-prompt="${prompt}">
                <span class="shortcut-text">
                  <strong>${label}</strong>
                  <small>${prompt}</small>
                </span>
              </button>
              <button type="button" class="shortcut-add-btn" data-shortcut-add="${prompt}" data-short-label="${shortLabel}" aria-label="添加为常用提示词" title="添加为常用提示词">
                <span class="shortcut-add-icon">+</span>
              </button>
            </div>`
            )
            .join("")}
        </div>`
    )
    .join("");
}

function closeShortcutMenu() {
  shortcutMenu.classList.remove("open");
  shortcutMenu.setAttribute("aria-hidden", "true");
}

function cloneRoleTasks(role) {
  return JSON.parse(JSON.stringify(roleTaskTemplates[role] || []));
}

function refreshAutopilotTasks() {
  roleTasks[currentRole] = cloneRoleTasks(currentRole);
  tasks = roleTasks[currentRole];
  activeTaskId = tasks[0]?.id || "";
  cardOrder = [...tasks.map((task) => task.id), ...aiToolCards.map((tool) => tool.id)];
  roleCardOrders[currentRole] = [...cardOrder];
  closeTask();
  renderTasks();
  lane.scrollLeft = 0;
  updateLaneArrows();
  showToast(currentRole === "leader" ? "已刷新领导视角自动驾驶分派任务" : "已刷新一线业务人员自动驾驶分派任务");
}

function switchRole(role) {
  if (!roleTasks[role] || role === currentRole) return;
  roleCardOrders[currentRole] = [...cardOrder];
  currentRole = role;
  tasks = roleTasks[currentRole];
  cardOrder = roleCardOrders[currentRole] ? [...roleCardOrders[currentRole]] : [...tasks.map((task) => task.id), ...aiToolCards.map((tool) => tool.id)];
  activeTaskId = tasks[0]?.id || "";
  closeTask();
  syncCardOrder();
  document.querySelectorAll("[data-role]").forEach((button) => {
    button.classList.toggle("active", button.dataset.role === currentRole);
  });
  const roleLabel = document.getElementById("userRoleLabel");
  if (roleLabel) roleLabel.textContent = currentRole === "leader" ? "领导视角" : "一线业务人员";
  closeUserDropdown();
  quickPrompts.classList.remove("manage-mode");
  renderQuickPrompts();
  renderShortcutMenu();
  renderTasks();
  showToast(currentRole === "leader" ? "已切换到领导视角" : "已切换到一线业务人员视角");
}

function createAiToolCard(tool, pinned = false) {
  return {
    ...tool,
    id: `tool-${tool.id}`,
    toolId: tool.id,
    type: "aiTool",
    business: "外部 AI 工具",
    owner: tool.provider,
    status: pinned ? "已钉住" : "已添加",
    state: "done",
    pinned
  };
}

function renderAiToolCard(tool) {
  return `
    <article class="task-card ai-tool-card" id="card-${tool.id}" data-card-id="${tool.id}" style="--tool-accent:${tool.accent}">
      <div class="task-head ai-tool-head">
        <div class="task-head-row">
          <div class="title-wrap">
            <h3 class="task-title">${tool.title}</h3>
            <div class="task-meta">
              <span class="tag">外部 AI 工具</span>
              <span class="tag">${tool.provider}</span>
              ${tool.pinned ? `<span class="tag tool-pin-tag">每天保留</span>` : ""}
            </div>
          </div>
          <div class="task-head-actions">
            <div class="task-icon-row">
              <button class="task-icon-button" data-open-tool="${tool.id}" aria-label="打开 ${tool.title}">⤢</button>
              <button class="task-icon-button pin-button ${tool.pinned ? "active" : ""}" data-pin-tool="${tool.id}" aria-label="钉住工具">⌖</button>
              <button class="task-icon-button" data-remove-tool="${tool.id}" aria-label="关闭工具">×</button>
            </div>
            <span class="task-state state-done">${tool.status}</span>
          </div>
        </div>
      </div>
      <div class="task-body ai-tool-body">
        <div class="tool-webview">
          <iframe title="${tool.title}" src="${tool.url}" loading="lazy" referrerpolicy="no-referrer" tabindex="-1" data-tool-frame="${tool.id}"></iframe>
          <div class="tool-webview-fallback">
            <strong>${tool.title} 浏览器页面</strong>
            <span>若该站点禁止嵌入，真实产品中使用受控 WebView / 浏览器容器承载，会话与原网页同步。</span>
            <button type="button" data-open-tool="${tool.id}">打开原网页</button>
          </div>
        </div>
      </div>
    </article>`;
}

function renderTaskBody(task) {
  if (task.liveMode) {
    return `
      <div class="live-agent-panel">
        <div class="mini-thread live-thread" id="mini-thread-${task.id}">
          ${renderMiniThread(task)}
        </div>
      </div>`;
  }

  if (task.displayMode === "meetingSchedule") {
    return renderMeetingScheduleBody(task);
  }

  return `
    ${
      task.invitation
        ? `<div class="invite-banner">
            <strong>${task.invitedBy} 邀请你加入</strong>
            <span>${task.inviteMessage}</span>
          </div>`
        : ""
    }
    <div class="summary-box">
      <section>
        <h4>任务内容</h4>
        <p>${task.taskContent || "当前任务已进入 AI 工作台，等待你确认下一步处理方式。"}</p>
      </section>
      <section>
        <h4>AI 已判断并完成</h4>
        <ul>${task.summary.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      ${
        task.weeklyHighlights
          ? `<section>
              <h4>周报重点</h4>
              <ul>${task.weeklyHighlights.map((item) => `<li>${item}</li>`).join("")}</ul>
              <button class="source-link" data-source="${task.id}">查看周报源文件</button>
            </section>`
          : ""
      }
      <section>
        <h4>你需要进一步处理</h4>
        <ul class="next-step-list">${renderNextSteps(task)}</ul>
      </section>
    </div>
    <div class="mini-thread" id="mini-thread-${task.id}">
      ${renderMiniThread(task)}
    </div>`;
}

function renderMeetingScheduleBody(task) {
  return `
    <div class="meeting-schedule-view">
      <div class="meeting-list">
        ${task.meetings
          .map(
            (meeting) => `
              <article class="meeting-item">
                <div class="meeting-main">
                  <span class="meeting-time">${meeting.time}</span>
                  <div>
                    <strong>${meeting.title}</strong>
                    <small>${meeting.location}</small>
                  </div>
                  <em>${meeting.level}</em>
                </div>
                <div class="meeting-detail">
                  <p><span>注意</span>${meeting.note}</p>
                  <p><span>准备</span>${meeting.prep}</p>
                </div>
              </article>`
          )
          .join("")}
      </div>
      <section class="meeting-actions">
        <h4>你需要进一步处理</h4>
        <ul class="next-step-list">${renderNextSteps(task)}</ul>
      </section>
    </div>
    <div class="mini-thread" id="mini-thread-${task.id}">
      ${renderMiniThread(task)}
    </div>`;
}

function renderMiniThread(task, limit = null) {
  const messages = task.conversation.filter(
    ([type]) => type === "user" || type === "ai" || type === "system" || type.startsWith("person:")
  );
  const visible = limit ? messages.slice(-limit) : messages;

  return visible
    .map(([type, text, meta]) => {
      const { className, label } = getMessageMeta(type);
      const streaming = meta?.streaming ? " streaming" : "";
      return `<div class="mini-message ${className}${streaming}">${label ? `<strong>${label}</strong>` : ""}<span>${text}</span></div>`;
    })
    .join("");
}

function getMessageMeta(type) {
  if (type === "user") return { className: "user", label: "" };
  if (type === "ai") return { className: "ai", label: "" };
  if (type === "system") return { className: "system", label: "系统提醒" };
  if (type.startsWith("person:")) {
    return { className: "person", label: type.slice("person:".length) };
  }
  return { className: "ai", label: "" };
}

function renderNextSteps(task) {
  const steps = task.nextSteps || task.actions.slice(0, 3);

  return steps
    .map((step, index) => {
      const action = task.actions[index] || "继续处理";
      return `
        <li>
          <span>${step}</span>
          <button class="inline-step-button" data-action="${action}" data-task="${task.id}">${action}</button>
        </li>`;
    })
    .join("");
}

function getMentionName(text) {
  const match = text.match(/@([\u4e00-\u9fa5A-Za-z0-9_]+)/);
  return match ? match[1] : "";
}

function reorderTasks(sourceId, targetId) {
  if (!sourceId || !targetId || sourceId === targetId) return;
  syncCardOrder();
  const sourceIndex = cardOrder.indexOf(sourceId);
  const targetIndex = cardOrder.indexOf(targetId);
  if (sourceIndex < 0 || targetIndex < 0) return;

  const [movedId] = cardOrder.splice(sourceIndex, 1);
  cardOrder.splice(targetIndex, 0, movedId);
  roleCardOrders[currentRole] = [...cardOrder];
  const movedCard = getWorkbenchCardById(sourceId);
  applyCardOrderStyles();
  document.getElementById(`card-${sourceId}`)?.classList.add("highlight");
  showToast(`已将「${movedCard?.title || "卡片"}」调整到新的优先级位置`);
  updateLaneArrows();
}

function updateRefreshButtonState() {
  if (!refreshAutopilotTasksButton) return;
  const taskCount = tasks.length;
  refreshAutopilotTasksButton.textContent = taskCount ? "重新刷新任务" : "自动驾驶任务刷新";
  refreshAutopilotTasksButton.title = taskCount
    ? "重新生成当前角色的自动驾驶任务卡片"
    : "生成当前角色的自动驾驶任务卡片";
}

function toggleTaskPin(id) {
  const task = tasks.find((item) => item.id === id);
  if (!task) return;
  task.pinned = !task.pinned;
  updateSingleTaskCard(task);
  document.getElementById(`card-${id}`)?.classList.add("highlight");
  showToast(task.pinned ? "已钉住，明天仍保留在工作台" : "已取消钉住，明天不自动保留");
}

function openAiTool(id) {
  const tool = aiToolCards.find((item) => item.id === id);
  if (!tool) return;
  window.open(tool.url, "_blank", "noopener,noreferrer");
  showToast(`已打开 ${tool.title} 原网页，会话保持同步`);
}

function toggleAiToolPin(id) {
  const tool = aiToolCards.find((item) => item.id === id);
  if (!tool) return;
  tool.pinned = !tool.pinned;
  tool.status = tool.pinned ? "已钉住" : "已添加";
  renderTasks();
  document.getElementById(`card-${id}`)?.classList.add("highlight");
  showToast(tool.pinned ? `${tool.title} 已钉住，每天保留` : `${tool.title} 已取消钉住`);
}

function removeAiTool(id) {
  const index = aiToolCards.findIndex((item) => item.id === id);
  if (index < 0) return;
  const [tool] = aiToolCards.splice(index, 1);
  removeCardFromOrder(id);
  renderTasks();
  renderToolConfig();
  showToast(`${tool.title} 已从工作台移除，可在配置中重新打开`);
}

function openToolConfig() {
  renderToolConfig();
  toolConfigModal.classList.add("open");
  toolConfigModal.setAttribute("aria-hidden", "false");
}

function closeToolConfig() {
  toolConfigModal.classList.remove("open");
  toolConfigModal.setAttribute("aria-hidden", "true");
}

function renderToolConfig() {
  const selectedIds = new Set(aiToolCards.map((item) => item.toolId));
  toolConfigList.innerHTML = aiToolCatalog
    .map(
      (tool) => `
        <label class="tool-option">
          <input type="checkbox" value="${tool.id}" ${selectedIds.has(tool.id) ? "checked" : ""} />
          <span class="tool-logo" style="--tool-accent:${tool.accent}">${tool.title.slice(0, 1)}</span>
          <span>
            <strong>${tool.title}</strong>
            <small>${tool.provider} · 会话同步 · 扩展打开原网页</small>
          </span>
        </label>`
    )
    .join("");
}

function applyToolConfig() {
  const selected = new Set(
    [...toolConfigList.querySelectorAll("input:checked")].map((input) => input.value)
  );
  aiToolCards = aiToolCards.filter((card) => selected.has(card.toolId));

  aiToolCatalog.forEach((tool) => {
    if (selected.has(tool.id) && !aiToolCards.some((card) => card.toolId === tool.id)) {
      aiToolCards.push(createAiToolCard(tool, false));
    }
  });

  syncCardOrder();

  closeToolConfig();
  renderTasks();
  const lastTool = aiToolCards.at(-1);
  if (lastTool) {
    document.getElementById(`card-${lastTool.id}`)?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest"
    });
  }
  showToast(`已更新 AI 工具卡片，共 ${aiToolCards.length} 个`);
}

function clearUnreadDone(id, shouldRender = true) {
  const task = tasks.find((item) => item.id === id);
  if (!task?.unreadDone) return;
  task.unreadDone = false;
  if (shouldRender) updateSingleTaskCard(task);
}

function positionCloseTaskPopover(anchor) {
  if (!anchor) return;
  const rect = anchor.getBoundingClientRect();
  const popoverWidth = Math.min(268, window.innerWidth - 24);
  const left = Math.min(window.innerWidth - popoverWidth - 12, Math.max(12, rect.right - popoverWidth));
  const top = Math.min(window.innerHeight - 132, rect.bottom + 8);
  closeTaskModal.style.left = `${left}px`;
  closeTaskModal.style.top = `${Math.max(12, top)}px`;
}

function openCloseTaskDialog(id, anchor = null) {
  const task = tasks.find((item) => item.id === id);
  if (!task) return;
  pendingCloseTaskId = id;
  closeTaskText.textContent = `关闭「${task.title}」前选择状态。`;
  positionCloseTaskPopover(anchor);
  closeTaskModal.classList.add("open");
  closeTaskModal.setAttribute("aria-hidden", "false");
}

function closeCloseTaskDialog() {
  closeTaskModal.classList.remove("open");
  closeTaskModal.setAttribute("aria-hidden", "true");
  closeTaskModal.removeAttribute("style");
  pendingCloseTaskId = null;
}

function closeTaskCard(result) {
  if (!pendingCloseTaskId) return;
  const index = tasks.findIndex((item) => item.id === pendingCloseTaskId);
  if (index < 0) return;
  const [task] = tasks.splice(index, 1);
  removeCardFromOrder(task.id);
  closedTasks.unshift({
    title: task.title,
    status: result,
    time: "刚刚",
    note: result === "done" ? "已标记完成并归入历史任务。" : "标记未完成，可在历史任务中继续查看。",
    dot: result === "done" ? "green" : "amber",
    task
  });
  renderTasks();
  renderHistory();
  closeCloseTaskDialog();
  showToast(result === "done" ? "任务已完成并关闭" : "任务已标记未完成并关闭");
}

function renderHistory() {
  const visible = closedTasks.filter((item) => historyFilter === "all" || item.status === historyFilter);
  historyList.innerHTML = `
    <div class="history-section">
      <p>历史任务</p>
      ${
        visible.length
          ? visible
              .map(
                (item) => `
                  <button class="history-item" data-history-title="${item.title}">
                    <span class="dot ${item.dot}"></span>
                    <span>
                      <strong>${item.title}</strong>
                      <small>${item.time} · ${item.status === "done" ? "已完成" : "未完成"} · ${item.note}</small>
                    </span>
                  </button>`
              )
              .join("")
          : `<div class="history-empty">暂无符合条件的历史任务</div>`
      }
    </div>`;

  historyList.querySelectorAll(".history-item").forEach((item) => {
    item.addEventListener("click", () => {
      const record = closedTasks.find((task) => task.title === item.dataset.historyTitle);
      if (record?.task) {
        closeHistory();
        openTask(record.task.id, record.task);
        showToast(`已打开历史会话：${record.title}`);
      } else {
        const historyTask = buildReadonlyHistoryTask(record || { title: item.dataset.historyTitle });
        closeHistory();
        openTask(historyTask.id, historyTask);
        showToast(`已打开历史会话：${historyTask.title}`);
      }
    });
  });
}

function buildReadonlyHistoryTask(record) {
  return {
    id: `history-${record.title}`,
    title: record.title,
    business: "历史任务",
    owner: record.status === "done" ? "已完成" : "未完成",
    status: record.status === "done" ? "已完成" : "未完成",
    state: record.status === "done" ? "done" : "waiting",
    taskContent: record.note || "该历史任务保留了当时的人类员工与 AI 交互内容。",
    summary: ["AI 已按当时任务目标完成资料整理。", "产物和参考物保留为当时会话过程中的版本。"],
    nextSteps: [record.status === "done" ? "任务已完成，可查看历史产物。" : "任务未完成，可继续补充处理。"],
    actions: ["继续处理"],
    artifacts: [["当时生成的任务材料", record.status === "done" ? "已归档" : "待补充"]],
    models: [["当时调用的业务原子模型", "已记录"]],
    references: [["当时关联的业务资料", "已留痕"]],
    conversation: [
      ["user", `继续处理「${record.title}」，先帮我把已有资料和待处理点整理出来。`],
      ["ai", record.note || "已整理当时任务中的资料、产物和待确认事项。"],
      ["user", record.status === "done" ? "确认归档。" : "先保留未完成，后续再补充。"],
      ["ai", record.status === "done" ? "已归档该任务，并保留会话产物和证据链。" : "已将该任务保留为未完成状态，后续可继续从这里处理。"]
    ]
  };
}

function getLaneStep() {
  const firstCard = lane.querySelector(".task-card");
  if (!firstCard) return 380;
  const styles = window.getComputedStyle(lane);
  const gap = Number.parseFloat(styles.columnGap || styles.gap || "14");
  return firstCard.getBoundingClientRect().width + gap;
}

function updateLaneArrows() {
  if (!lanePrev || !laneNext) return;
  const maxScroll = lane.scrollWidth - lane.clientWidth - 2;
  lanePrev.disabled = lane.scrollLeft <= 2;
  laneNext.disabled = lane.scrollLeft >= maxScroll;
}

function scrollLane(direction) {
  const target = lane.scrollLeft + getLaneStep() * direction;
  const maxScroll = lane.scrollWidth - lane.clientWidth;
  const clamped = Math.max(0, Math.min(target, maxScroll));
  const start = lane.scrollLeft;
  const distance = clamped - start;
  if (Math.abs(distance) < 1) { updateLaneArrows(); return; }
  const duration = 300;
  const startTime = performance.now();
  function step(now) {
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    lane.scrollLeft = start + distance * eased;
    if (t < 1) {
      window.requestAnimationFrame(step);
    } else {
      lane.scrollLeft = clamped;
      updateLaneArrows();
    }
  }
  window.requestAnimationFrame(step);
}

function renderAssetList(container, items) {
  const sectionKey = container.id;
  container.innerHTML = items
    .map(
      ([name, meta], index) => `
      <div class="asset" data-artifact-section="${sectionKey}" data-artifact-index="${index}">
        <strong>${name}</strong>
        <span>${meta}</span>
      </div>`
    )
    .join("");
}

function openSourceFile(id) {
  const task = tasks.find((item) => item.id === id);
  if (!task?.sourceFile) return;

  sourceTitle.textContent = task.sourceFile.title;
  sourceContent.innerHTML = `
    <p class="source-meta">${task.sourceFile.meta}</p>
    ${task.sourceFile.sections
      .map(
        ([title, body]) => `
          <section>
            <h3>${title}</h3>
            <p>${body}</p>
          </section>`
      )
      .join("")}
  `;
  sourceModal.classList.add("open");
  sourceModal.setAttribute("aria-hidden", "false");
}

function closeSourceFile() {
  sourceModal.classList.remove("open");
  sourceModal.setAttribute("aria-hidden", "true");
}

function renderConversation(task) {
  conversation.innerHTML = task.conversation
    .map(([type, text, meta]) => {
      const { className, label } = getMessageMeta(type);
      const streaming = meta?.streaming ? " streaming" : "";
      return `<div class="message ${className}${streaming}">${label ? `<strong>${label}</strong>` : ""}<span>${text}</span></div>`;
    })
    .join("");
  conversation.scrollTop = conversation.scrollHeight;
}

function buildAiReply(task, text) {
  const commonHeader = `收到你的补充指令：${text}

正在执行任务 Agent 流程：
1. 理解当前任务目标和你刚才的补充要求。
2. 读取本任务已有上下文、已生成产物、风险提示和待确认事项。
3. 调用相关业务原子模型进行二次判断。
4. 将处理结果同步回当前任务卡片，并更新下一步建议。`;

  if (text.includes("@")) {
    const name = getMentionName(text) || "同事";
    return `${commonHeader}

协同处理结果：
- 已识别被邀请人：${name}。
- 已整理当前任务摘要、已生成材料、待确认点和关联证据链。
- 已向 ${name} 发送协作邀请，对方进入后会看到一张带“协同邀请”标识的任务卡片。
- 当前任务会继续保留在你的工作台中，后续双方回复都会沉淀在同一任务会话里。`;
  }
  if (task.id === "leader-approval" || text.includes("审批")) {
    return `${commonHeader}

审批事项更新：
- 当前待领导审批 3 项，其中紧急 1 项、普通 2 项。
- 紧急项为客户材料外发审批，影响下午 16:00 前客户沟通。
- 普通项包括机构客户服务方案确认、投行项目费用预算调整。

AI 建议：
- 客户材料外发审批：建议有条件通过，前提是删除收益暗示表述并补充适当性说明。
- 机构客户服务方案：建议通过，可要求产品和投研负责人补充会后跟进动作。
- 投行项目费用预算调整：建议要求项目组补充费用测算依据后再批。

我已生成三条审批意见草稿，可直接批量处理或逐项查看。`;
  }
  if (task.id === "leader-daily-brief" || text.includes("经营日报") || text.includes("经营数据")) {
    return `${commonHeader}

经营数据更新：
- 截至 14:30，客户资产规模 AUM 为 1,286.4 亿元，较昨日增加 8.7 亿元。
- 今日新增有效客户 186 户，其中高净值客户 11 户，机构客户 3 户。
- 产品销售意向金额 4.2 亿元，已确认成交 1.6 亿元，待确认 2.6 亿元。
- 今日 AI 辅助生成客户沟通材料 316 份，已进入人工确认 94 份。

重点机会：
- 18 户高净值客户出现产品到期或大额资金转入，预计可形成 3.1 亿元配置讨论机会。
- 2 家机构客户正在评估固收类组合服务，建议机构业务负责人今天完成二次跟进。
- 3 条投行业务线索来自 CRM 与会议纪要，其中 1 条建议转投行团队初筛。

需要领导确认：
- 是否将高净值客户流失挽回列为今日第一优先级。
- 是否对 IPO 项目审计补充说明发起督办。
- 是否要求机构业务、投研、产品三方明天上午完成方案评审。`;
  }
  if (text.includes("风险") || text.includes("合规")) {
    if (task.id === "compliance-review") {
      return `${commonHeader}

产品推荐材料复核结果：
- 第 4 页“稳健增值”表述容易被理解为收益承诺，建议改为“风险收益特征相对稳健”。
- 客户风险等级为 C3，材料中拟推荐产品包含 1 个 R4 产品，需要补充适当性确认。
- 免责声明位置偏后，建议前移到产品风险说明页，并在客户确认页再次提示。

模型调用：
- 已调用营销材料审查模型，定位 2 处敏感表述。
- 已调用适当性匹配模型，重新核对客户等级、产品等级和投资期限。
- 已调用证据链模型，确认引用材料来自公司最新制度版本。

下一步建议：
- 先一键修订收益类表述。
- 再提交人工复核确认 R4 产品是否保留。
- 修订后生成可外发版本，并保留修订留痕。`;
    }

    return `${commonHeader}

风险扫描更新：
- 今日共聚合 6 项风险事项，其中高优先级 2 项、中优先级 3 项、观察项 1 项。
- 2 份产品推荐材料存在收益表述偏激进问题，涉及 37 位待触达客户。
- 近 3 日产品预期沟通类咨询和投诉合计 9 条，较上周同期增加 42%。
- 新能源主题客户集中交易 23 笔，建议补充统一风险提示话术。

处置建议：
- 17:00 前完成 2 份营销材料修订并留痕。
- 由客户服务负责人逐条确认 9 条咨询/投诉的真实诉求。
- 对新能源主题客户沟通统一增加适当性和波动风险提示。

我已准备好风险清单、责任人建议和管理通报草稿。`;
  }
  if (task.id === "leader-project-board" || text.includes("项目督办") || text.includes("项目推进")) {
    return `${commonHeader}

重点项目进展：
- 当前跟踪重点项目 12 个，正常推进 8 个，存在卡点 4 个。
- 需要领导介入协调 2 个，建议部门负责人处理 2 个。

主要卡点：
- XX 股份 IPO 项目：底稿完成度 88%，审计机构补充说明未返回。
- 机构客户综合服务方案：产品、投研、合规意见尚未合并，客户希望明天下午前拿到定稿。
- 家族信托方案：客户 KYC 更新不完整，法务条款确认滞后。
- 新能源行业路演：研究所观点已完成，合规审查仍在排队。

建议动作：
- 对 IPO 项目发送审计补充说明督办。
- 明天 10:00 前组织机构客户方案三方快审。
- 指定财富负责人补齐家族信托 KYC 缺口。
- 将新能源路演材料标记为高优先级合规复核。`;
  }
  if (task.id === "leader-team-blocker" || text.includes("团队负荷") || text.includes("阻塞")) {
    return `${commonHeader}

团队负荷分析：
- 当前团队活跃任务 31 项，其中高优先级 9 项。
- 3 名成员负荷超过 85%，2 名成员存在连续等待外部确认的阻塞。
- 今日平均任务等待时长 3.8 小时，较昨日增加 0.7 小时。

阻塞节点：
- 合规复核排队 3 项，平均等待 6.2 小时。
- 产品经理确认 2 项，均与客户方案定稿有关。
- 外部审计补充说明 1 项，影响投行项目内核材料。

资源调配建议：
- 将低风险材料复核从王敏转给李晨，预计释放 1.5 小时。
- 将机构客户方案评审设为明早第一优先级。
- 对审计补充说明由领导发起正式督办。`;
  }
  if (task.id === "leader-meeting-schedule" || text.includes("会议安排") || text.includes("会议准备") || text.includes("会议材料")) {
    return `${commonHeader}

今日会议安排：
- 09:30 经营碰头会：已准备风险摘要、项目卡点和审批事项清单。
- 10:20 重点客户沟通会：需提前确认客户材料外发审批意见。
- 11:00 机构客户方案评审会：产品、投研、合规三方意见已合并。
- 14:30 投行项目例会：IPO 项目审计补充说明仍是核心卡点。

会前提醒：
- 09:30 会议建议先讨论高风险事项，再讨论项目卡点。
- 10:20 前需要确认客户材料是否可以外发。
- 11:00 会议建议要求机构业务负责人明确客户后续跟进动作。

我已生成今日会议安排、会前材料清单和三条提醒消息草稿。`;
  }
  if (text.includes("业务推荐") || text.includes("业务机会") || text.includes("产品适配")) {
    return `${commonHeader}

业务推荐结果：
- 财富管理：18 户客户存在现金管理或稳健配置需求，预计形成 2.3 亿元讨论机会。
- 投行业务：3 家企业客户出现融资、并购或上市辅导相关信号。
- 机构服务：2 家机构客户近期关注新能源和固收策略，可组合投研观点与交易服务。
- 两融提醒：9 户客户具备两融使用基础，但需先补充风险揭示与适当性确认。
- 客户挽回：5 户客户近 7 日资产净流出明显，建议今天优先触达。

建议下一步优先处理“客户流失风险挽回”和“财富管理业务推荐”，两类事项时效性最高。`;
  }
  if (text.includes("材料") || text.includes("生成")) {
    return `${commonHeader}

模型调用：
- 已调用文档生成模型，基于当前任务上下文组织材料结构。
- 已调用业务摘要模型，提取客户、项目或市场相关重点。
- 已调用合规话术模型，过滤不适合直接对外表达的内容。

处理结论：
- 我会先生成可审阅初稿，而不是直接提交。
- 初稿会包含核心结论、数据依据、风险提示和建议下一步。
- 生成后你可以在当前卡片继续追问，也可以展开任务查看完整产物。`;
  }

  if (task.id === "client-visit") {
    return `${commonHeader}

客户拜访任务执行过程：
- 已重新读取客户近 90 天资产变化、交易行为和产品持仓。
- 已调用客户画像模型，判断客户当前更关注稳健配置和现金管理。
- 已调用产品适当性模型，过滤掉与客户风险承受能力不匹配的推荐方向。
- 已调用合规话术模型，检查是否存在承诺收益、弱化风险或过度营销表述。

处理结论：
- 拜访材料建议继续采用“风险揭示优先”的口径。
- 产品推荐部分可以保留，但应从“推荐产品”改成“可讨论的配置方向”。
- 会后纪要模板中建议增加一项：确认客户是否接受进一步风险测评更新。

你下一步可以直接确认生成材料，也可以继续让我把话术改得更稳健。`;
  }

  return `${commonHeader}

处理结论：
- 我已基于当前任务上下文完成二次分析。
- 当前任务没有发现必须中断的风险，但建议先由你确认下一步动作。
- 你可以继续在这张卡片里补充要求，也可以先切换到其他任务并行处理。`;
}

function detectNewTaskIntent(prompt) {
  if (prompt.includes("ABS")) return "absOpportunity";
  if ((prompt.includes("两融") || prompt.includes("融资融券")) && (prompt.includes("分析") || prompt.includes("趋势") || prompt.includes("变化") || prompt.includes("余额"))) return "marginAnalysis";
  if (prompt.includes("信托") || prompt.includes("理财配置")) return "trustWealth";
  if (prompt.includes("融资融券") || prompt.includes("两融")) return "marginGuide";
  if (prompt.includes("研报") || prompt.includes("研究所")) return "researchBrief";
  if (prompt.includes("理财产品") || prompt.includes("产品发行") || prompt.includes("发售")) return "wealthProduct";
  if (prompt.includes("公募基金") || prompt.includes("费率新规") || prompt.includes("费率")) return "fundFeeRule";
  if (prompt.includes("监管资讯") || prompt.includes("监管动态")) return "regulationBrief";
  if (prompt.includes("证券行业") || prompt.includes("行业动态")) return "industryBrief";
  if (prompt.includes("各部门") || prompt.includes("部门业务")) return "departmentBrief";
  if (prompt.includes("费用控制") || prompt.includes("异常支出")) return "expenseControl";
  if (prompt.includes("审批") || prompt.includes("批复")) return "approval";
  if (prompt.includes("会议安排") || prompt.includes("今日会议") || prompt.includes("日程")) return "meetingSchedule";
  if (prompt.includes("经营日报") || prompt.includes("经营情况") || prompt.includes("经营重点")) return "operation";
  if (prompt.includes("风险预警") || prompt.includes("高风险") || prompt.includes("风险事项")) return "risk";
  if (prompt.includes("项目督办") || prompt.includes("项目推进") || prompt.includes("项目最新进展") || prompt.includes("项目进展") || prompt.includes("卡点督办")) return "project";
  if (prompt.includes("团队负荷") || prompt.includes("阻塞节点") || prompt.includes("资源调配")) return "team";
  if (prompt.includes("会议准备") || prompt.includes("会议议程") || prompt.includes("经营会议")) return "meeting";
  if (prompt.includes("业务推荐") || prompt.includes("业务机会") || prompt.includes("产品适配") || prompt.includes("客户流失")) return "business";
  if (
    prompt.includes("客户拜访") ||
    (prompt.includes("拜访") && (prompt.includes("客户") || prompt.includes("高净值"))) ||
    (prompt.includes("高净值客户") && (prompt.includes("材料") || prompt.includes("准备")))
  ) {
    return "visit";
  }
  if (prompt.includes("合规") || prompt.includes("适当性")) return "compliance";
  if (prompt.includes("市场异动") || prompt.includes("行情")) return "market";
  if (prompt.includes("生成材料") || prompt.includes("正式材料")) return "material";
  if (prompt.includes("会议纪要") || prompt.includes("待办事项")) return "minutes";
  return "general";
}

function buildTopicPreset(prompt, intent) {
  const topics = {
    absOpportunity: {
      title: "ABS 业务机会识别",
      business: "投行与机构业务",
      focus: "ABS 业务机会",
      points: ["筛选近 90 日有稳定现金流或应收账款特征的企业客户。", "识别供应链、租赁、小贷、物业收费等可证券化资产线索。", "生成客户初筛清单、切入话术和投行团队协同建议。"],
      next: ["确认目标客户筛选口径。", "生成 ABS 业务机会清单。", "邀请投行同事做初步可行性判断。"]
    },
    trustWealth: {
      title: "信托理财配置建议",
      business: "财富管理",
      focus: "信托理财配置",
      points: ["结合客户资产结构、风险偏好和流动性需求筛选适配方向。", "区分家族信托、现金管理、稳健配置和期限错配风险。", "生成适合客户沟通的配置建议和风险提示。"],
      next: ["确认客户风险等级和投资期限。", "生成信托理财沟通材料。", "补充适当性说明和免责声明。"]
    },
    marginGuide: {
      title: "融资融券操作指引",
      business: "信用业务",
      focus: "融资融券业务操作",
      points: ["整理开户、授信、担保品、维持担保比例和风险揭示流程。", "标出客户准入、适当性、集中度和强平风险沟通要点。", "生成客户经理可直接使用的操作清单。"],
      next: ["确认目标客户是否满足准入条件。", "生成两融业务沟通口径。", "整理风险提示和操作指引。"]
    },
    marginAnalysis: {
      title: "两融余额趋势分析",
      business: "信用业务",
      focus: "两融余额变化趋势",
      points: ["已拉取近两周沪深北两融余额逐日数据。", "已拆解融资 vs 融券减量结构、板块分布和资金方向。", "已交叉验证行情回调、成长板块波动和杠杆资金风险偏好变化。"],
      next: ["确认是否生成客户版简评。", "选择是否加深行业或板块层面分析。", "订阅后续两融数据变动提醒。"]
    },
    researchBrief: {
      title: "研究所研报资讯",
      business: "投研服务",
      focus: "研究所最新研报",
      points: ["汇总近期重点行业和公司研报观点。", "提炼适合客户沟通的核心结论、风险点和关注指标。", "把研究观点转换成客户可理解的服务话术。"],
      next: ["选择行业或客户范围。", "生成客户版研报摘要。", "订阅后续研报更新提醒。"]
    },
    wealthProduct: {
      title: "理财产品发行信息",
      business: "财富管理",
      focus: "最新理财产品发售",
      points: ["整理近期新发理财产品、期限、风险等级和募集时间。", "匹配产品适当性和客户持仓到期情况。", "生成可跟进客户清单和合规沟通话术。"],
      next: ["筛选适合跟进客户。", "生成产品发售信息摘要。", "生成客户沟通材料。"]
    },
    fundFeeRule: {
      title: "公募基金费率新规解读",
      business: "产品与合规",
      focus: "公募基金费率新规",
      points: ["梳理费率调整、销售服务、客户告知和存量产品影响。", "识别对客户服务、产品推荐和合规披露的影响。", "生成客户经理内部培训要点和客户问答口径。"],
      next: ["生成新规要点摘要。", "整理客户问答话术。", "标出需要合规确认的事项。"]
    },
    regulationBrief: {
      title: "最新监管资讯速览",
      business: "经营管理",
      focus: "监管资讯",
      points: ["汇总近期监管发布、窗口指导和行业处罚案例。", "提炼对财富、投行、机构、合规和运营条线的影响。", "生成管理层需要关注的行动清单。"],
      next: ["确认需重点关注的监管事项。", "生成管理层通报。", "分派责任部门跟进。"]
    },
    industryBrief: {
      title: "证券行业动态分析",
      business: "战略与经营",
      focus: "证券行业最新动态",
      points: ["整理券商业务创新、监管趋势、资管产品和机构服务动态。", "分析对公司业务布局、风险管理和客户服务的影响。", "生成管理层讨论提纲。"],
      next: ["生成行业动态摘要。", "标出对公司业务的影响。", "形成管理层讨论问题。"]
    },
    departmentBrief: {
      title: "部门业务开展情况",
      business: "经营管理",
      focus: "各部门业务情况",
      points: ["汇总财富、投行、机构、研究、合规等部门近期进展。", "识别业务亮点、项目卡点和跨部门协同事项。", "生成需要领导协调的问题清单。"],
      next: ["查看部门业务摘要。", "识别卡点责任人。", "生成部门协同督办事项。"]
    },
    expenseControl: {
      title: "费用控制情况分析",
      business: "财务管理",
      focus: "费用控制",
      points: ["汇总本月费用执行、预算占用和异常支出线索。", "识别差旅、营销、项目费用和外部服务费用中的偏离项。", "生成费用控制建议和需审批事项。"],
      next: ["查看异常费用明细。", "生成费用控制建议。", "形成需要审批或问询的事项。"]
    }
  };

  const topic = topics[intent];
  if (!topic) return null;

  if (intent === "marginAnalysis") {
    return {
      title: topic.title,
      business: topic.business,
      summary: topic.points,
      nextSteps: topic.next,
      actions: ["生成客户简评", "加深板块分析", "订阅提醒", "发送客户"],
      artifacts: [["两融余额走势图", "Chart · 近 14 日"], ["板块资金明细", "Table · 净偿还 Top 10"], ["客户简评", "Doc · 初稿"]],
      models: [["两融数据抓取模型", "已完成"], ["板块资金归因模型", "已完成"], ["市场情绪分析模型", "已完成"]],
      references: [["沪深北交易所数据", "截至 7/14"], ["证券时报", "引用 2 条"], ["上海证券报", "引用 1 条"]],
      output: `正在分析近期两融余额变化趋势：${prompt}\n\n数据口径：截至 2026-07-14，来源为沪深北交易所公开数据。\n\n一、整体走势概况\n- 前期阶段：两融余额整体上行，7 月 1 日达阶段性高点 30,305 亿元（历史次高），杠杆资金处于高位，以融资多头为主，集中在科技成长板块。（来源：证券时报）\n- 近期阶段：自 7 月 2 日起进入连续回落周期，截至 7 月 14 日实现九连降。\n  · 7 月 14 日沪深北全市场两融余额：28,994.39 亿元\n  · 期间累计减少：1,310.35 亿元\n  · 其中融资余额：28,781.18 亿元（主力减量来源，融资盘主动偿还）\n  · 融券余额：仅小幅波动，不是减量主力\n  · 分市场：沪市、深市均同步下滑，深市减量压力尤为明显；北交所体量小影响有限\n  · 单日特征：7 月 13 日单日减少 345.78 亿元，是春节后最大单日降幅，体现杠杆资金集中降杠杆行为（来源：证券时报）\n\n二、结构特征\n1. 核心减量来源：融资盘集中偿还\n   - 主力流出板块：电子、电力设备、有色金属等前期热门成长赛道（AI、芯片、半导体相关个股），是融资净偿还主力\n   - 少数抗跌板块：国防军工、钢铁等偏防御板块有少量融资净买入，整体占比很小，无法扭转整体降杠杆趋势（来源：上海证券报）\n   - 融券余额整体体量较小、变化幅度有限，不是本轮余额下滑主因，主要是多头主动减仓，而非空头大规模融券做空\n\n2. 市场情绪特征：风险偏好明显回落，杠杆资金趋于谨慎，短期投机资金快速离场，成交活跃度随之下降\n\n三、核心驱动原因\n1. 大盘整体回调、成长板块大幅波动，持仓浮亏带来“平仓压力 + 主动风控减仓”，杠杆资金风险偏好快速下行\n2. 前期高点融资盘集中入场成长赛道，板块回调后被迫降杠杆，形成“下跌→偿还→进一步卖出”的负反馈\n3. 部分投资者主动转向防御策略，将资金从高波动品种撤出，转入低风险或现金管理方向\n\n我已生成两融余额走势图、板块资金明细和客户简评初稿。你可以继续让我按客户分层、板块维度或时间区间展开，也可以直接生成可转发客户的简版摘要。`
    };
  }

  return {
    title: topic.title,
    business: topic.business,
    summary: topic.points,
    nextSteps: topic.next,
    actions: ["生成清单", "补充依据", "邀请同事", "形成材料"],
    artifacts: [[`${topic.focus}分析清单`, "Table · 初稿"], ["沟通与处理建议", "Doc · 待确认"]],
    models: [["意图识别模型", "已完成"], ["业务机会识别模型", "已完成"], ["合规边界校验模型", "已完成"]],
    references: [["用户提示词", "已留痕"], ["企业知识库", "已检索"], ["历史服务记录", "已关联"]],
    output: `正在处理：${prompt}

我已按「${topic.focus}」方向生成初步分析。

已完成的判断：
- ${topic.points[0]}
- ${topic.points[1]}
- ${topic.points[2]}

建议下一步：
- ${topic.next[0]}
- ${topic.next[1]}
- ${topic.next[2]}

我已生成「${topic.focus}分析清单」和「沟通与处理建议」初稿。你可以继续让我补充客户范围、数据依据、合规边界或生成正式材料。`
  };
}

function buildNewTaskPreset(prompt) {
  const intent = detectNewTaskIntent(prompt);
  const presets = {
    approval: {
      title: "待领导审批事项",
      business: "审批决策",
      summary: ["已汇总今日待审批事项。", "已按紧急程度和业务影响排序。", "已生成审批意见草稿。"],
      nextSteps: ["确认紧急审批事项。", "选择通过、退回或要求补充。", "批量生成审批意见。"],
      actions: ["查看审批", "同意通过", "要求补充", "批量处理"],
      artifacts: [["审批事项清单", "Table · 3 项"], ["审批意见草稿", "Doc · 可编辑"], ["关联材料", "PDF · 5 份"]],
      models: [["审批优先级模型", "已完成"], ["风险摘要模型", "已完成"], ["合规意见匹配模型", "已完成"]],
      references: [["审批系统", "实时同步"], ["材料外发申请", "引用 2 项"], ["项目费用申请", "引用 1 项"]],
      output: `正在汇总待领导审批事项：${prompt}

审批事项概览：
- 当前待审批 3 项，其中紧急 1 项、普通 2 项。
- 紧急项：客户材料外发审批，影响下午 16:00 前客户沟通。
- 普通项：机构客户综合服务方案确认、投行项目费用预算调整。

逐项建议：
- 客户材料外发审批：建议有条件通过，需删除收益暗示表述，并补充适当性说明。
- 机构客户服务方案：建议通过，要求产品和投研负责人补充会后跟进动作。
- 投行项目费用预算调整：建议退回补充费用测算依据，再进入审批。

需要领导处理：
- 先处理客户材料外发审批，避免影响客户沟通时间。
- 对投行项目费用调整选择“要求补充”，系统会自动生成补充说明要求。
- 其余事项可批量生成审批意见并留痕。`
    },
    meetingSchedule: {
      title: "今日会议安排提醒",
      business: "会议与日程",
      summary: ["已汇总今日剩余会议。", "已匹配会前材料和待确认问题。", "已生成会议提醒和决策清单。"],
      nextSteps: ["查看 09:30 经营碰头会材料。", "确认 11:00 客户方案评审意见。", "发送会前提醒。"],
      actions: ["查看日程", "确认意见", "生成材料", "发送提醒"],
      artifacts: [["今日会议安排", "Calendar · 4 场"], ["会前材料清单", "Doc · 已生成"], ["提醒消息", "IM · 待发送"]],
      models: [["日程摘要模型", "已完成"], ["会议材料准备模型", "已完成"], ["决策问题提炼模型", "已完成"]],
      references: [["领导日历", "今日同步"], ["会议材料", "引用 6 份"], ["审批事项", "引用 3 项"]],
      output: `正在汇总今日会议安排：${prompt}

今日剩余会议：
- 09:30 经营碰头会：建议重点看风险摘要、项目卡点和审批事项清单。
- 10:20 重点客户沟通会：需要提前确认客户材料外发审批意见。
- 11:00 机构客户方案评审会：产品、投研、合规三方意见已合并。
- 14:30 投行项目例会：IPO 项目审计补充说明仍是核心卡点。

会前材料状态：
- 09:30 会议材料已齐备，可直接查看。
- 10:20 客户沟通材料仍有 1 条适当性说明待确认。
- 11:00 方案评审材料已完成，但需要领导确认是否要求客户经理补充跟进计划。
- 14:30 投行项目例会建议提前追问审计机构返回时间。

建议领导提前处理：
- 先确认客户材料外发审批意见。
- 将 09:30 会议议程调整为：风险事项、审批事项、项目卡点。
- 向 11:00 参会人发送会前提醒，要求带着明确结论参会。`
    },
    operation: {
      title: "今日经营日报",
      business: "经营管理",
      summary: ["已汇总今日经营核心指标。", "已识别重点业务机会和异常事项。", "已生成领导需要确认的经营动作。"],
      nextSteps: ["确认今日 3 项重点经营动作。", "选择是否生成经营日报 PPT。", "对异常客户和卡点项目发起督办。"],
      actions: ["确认重点", "生成日报", "发起督办", "邀请负责人"],
      artifacts: [["经营日报初稿", "Doc · 今日 14:30"], ["经营指标表", "Table · 12 项"], ["重点客户清单", "CRM · 18 户"]],
      models: [["经营指标归因模型", "已完成"], ["客户机会识别模型", "已完成"], ["风险事项聚合模型", "已完成"]],
      references: [["资产与交易数据", "今日实时汇总"], ["CRM 跟进记录", "引用 46 条"], ["团队任务系统", "引用 23 项"]],
      output: `正在生成今日经营日报：${prompt}

数据口径：
- 时间范围：2026-07-10 09:30 至 14:30。
- 数据来源：资产账户、CRM、产品销售、机构服务、投行项目、任务系统、风险预警。
- 当前为演示原型数据，用于呈现领导视角下的经营分析形态。

一、核心经营数据
- 客户资产规模 AUM：1,286.4 亿元，较昨日增加 8.7 亿元，较近 5 日均值高 12.4%。
- 今日新增有效客户：186 户，其中高净值客户 11 户，机构客户 3 户。
- 产品销售意向金额：4.2 亿元，已确认成交 1.6 亿元，待确认 2.6 亿元。
- 今日客户触达：1,248 次，其中 AI 辅助生成沟通材料 316 份。
- 机构客户服务动作：14 场拜访、6 份研究材料推送、2 个综合服务方案待评审。

二、经营机会
- 高净值客户资产异动：18 户出现大额资金转入或产品到期，预计可形成 3.1 亿元配置机会。
- 机构客户新增机会：2 家机构客户正在评估固收类组合服务，建议由机构业务负责人今天完成二次跟进。
- 投行业务线索：AI 从 CRM 与会议纪要中识别 3 条潜在并购、再融资或 IPO 服务线索，其中 1 条需要领导协调投行团队介入。

三、异常与卡点
- 5 户重点客户近 7 日资产净流出超过 30%，AI 判断其中 2 户存在流失风险。
- 2 份产品推荐材料仍有收益表述偏激进问题，建议合规负责人今天 17:00 前完成复核。
- 1 个 IPO 项目等待审计机构补充说明，已影响下周内核材料定稿节奏。

四、建议领导今日确认
- 将“高净值客户流失挽回”列为今日第一优先级，指定财富团队负责人逐户跟进。
- 对 IPO 项目审计补充说明发起督办，明确今天下班前返回时间。
- 要求机构业务、投研、产品三方在明天上午前完成 2 家机构客户方案评审。

我已生成经营日报初稿、指标明细表和重点客户清单。你可以继续要求我生成 PPT、拆解督办消息，或 @ 负责人进入该任务。`
    },
    risk: {
      title: "高风险事项预警",
      business: "风险与合规",
      summary: ["已聚合今日风险事项。", "已按影响范围和紧急程度排序。", "已生成处置建议和责任人建议。"],
      nextSteps: ["确认需要升级处理的风险事项。", "指派材料修订和客户沟通责任人。", "生成风险晨报或管理通报。"],
      actions: ["升级处理", "指派责任人", "生成通报", "邀请合规"],
      artifacts: [["风险预警清单", "Table · 6 项"], ["材料风险摘录", "PDF · 标注版"], ["处置建议", "Doc · 待确认"]],
      models: [["合规风险识别模型", "已完成"], ["投诉趋势模型", "已完成"], ["异常交易预警模型", "持续监控"]],
      references: [["合规审查系统", "引用 12 条"], ["客服工单", "引用 9 条"], ["监管反馈台账", "引用 4 条"]],
      output: `正在生成风险预警：${prompt}

风险扫描结果：
- 今日共聚合 6 项需要关注的风险事项，其中高优先级 2 项，中优先级 3 项，观察项 1 项。
- 扫描范围包括营销材料、客户投诉、异常交易、投行项目监管反馈和外部舆情。

一、高优先级风险
- 产品推荐材料风险：2 份材料出现“稳健增值”“优先锁定收益”等偏激进表述，涉及 37 位待触达客户。
- 客户投诉趋势：近 3 日关于产品预期沟通的咨询和投诉合计 9 条，较上周同期增加 42%。

二、中优先级风险
- 投行项目监管反馈：1 项审计补充说明未返回，可能影响内核材料定稿。
- 异常交易关注：新能源主题客户集中交易 23 笔，AI 判断需要补充适当性提示。
- 机构客户材料外发：2 份方案尚未完成合规复核，不建议直接对外发送。

三、建议处置
- 17:00 前完成 2 份营销材料修订，并保留修订前后版本。
- 由客户服务负责人对 9 条投诉/咨询逐条确认客户真实诉求。
- 对新能源主题客户统一生成风险提示话术，避免单一观点过度营销。

我已准备好风险清单、责任人建议和通报草稿。你可以让我一键生成管理通报，或 @ 合规负责人进入会话确认。`
    },
    project: {
      title: "重点项目督办",
      business: "项目管理",
      summary: ["已汇总重点项目进展。", "已识别项目卡点和外部依赖。", "已生成督办建议。"],
      nextSteps: ["确认需要领导介入的项目卡点。", "生成负责人督办消息。", "安排跨部门评审。"],
      actions: ["确认卡点", "生成督办", "安排评审", "生成周报"],
      artifacts: [["重点项目清单", "Board · 12 项"], ["卡点清单", "Table · 4 项"], ["督办消息", "IM · 待发送"]],
      models: [["项目进度预测模型", "已完成"], ["依赖识别模型", "已完成"], ["督办优先级模型", "已完成"]],
      references: [["项目管理系统", "同步于 14:20"], ["邮件往来", "引用 18 封"], ["会议纪要", "引用 5 份"]],
      output: `正在生成项目督办清单：${prompt}

项目总览：
- 今日纳入跟踪的重点项目 12 个，其中正常推进 8 个，存在卡点 4 个。
- 需要领导介入协调 2 个，建议部门负责人处理 2 个。

重点卡点：
- XX 股份 IPO 项目：底稿完成度 88%，审计机构补充说明未返回，影响内核材料最终定稿。
- 某机构客户综合服务方案：产品、投研、合规三方意见尚未合并，客户希望明天下午前拿到定稿。
- 高净值客户家族信托方案：客户 KYC 信息更新不完整，法务条款确认滞后。
- 新能源行业路演项目：研究所观点已完成，但合规审查排队中。

建议督办动作：
- 对 IPO 项目发送审计补充说明督办，要求今天 18:00 前明确返回时间。
- 明天 10:00 前组织机构客户方案三方快审会。
- 指定财富管理负责人补齐家族信托 KYC 缺口。
- 将新能源路演材料标记为高优先级合规复核。

我已生成项目卡点清单和 4 条督办消息草稿。你可以直接选择发送给责任人，或要求我按部门拆分。`
    },
    team: {
      title: "团队负荷与阻塞分析",
      business: "团队管理",
      summary: ["已分析团队任务负荷。", "已识别跨部门阻塞节点。", "已生成资源调配建议。"],
      nextSteps: ["确认高负荷成员是否需要分担。", "对阻塞节点发起协调。", "生成团队督办消息。"],
      actions: ["调整资源", "生成督办", "通知负责人", "查看详情"],
      artifacts: [["团队负荷热力图", "Chart · 实时"], ["阻塞清单", "Table · 6 项"], ["资源调配建议", "Doc · 待确认"]],
      models: [["团队负荷模型", "已完成"], ["任务阻塞识别模型", "已完成"], ["资源调配模型", "已完成"]],
      references: [["任务系统", "引用 31 项"], ["日程忙闲", "同步完成"], ["IM 协同记录", "引用 20 条"]],
      output: `正在分析团队负荷：${prompt}

团队负荷概览：
- 当前团队活跃任务 31 项，其中高优先级 9 项。
- 3 名成员负荷超过 85%，2 名成员存在连续等待外部确认的阻塞。
- 今日平均任务等待时长 3.8 小时，较昨日增加 0.7 小时。

阻塞节点：
- 合规复核排队 3 项，平均等待 6.2 小时。
- 产品经理确认 2 项，均与客户方案定稿有关。
- 外部审计补充说明 1 项，影响投行项目内核材料。

资源调配建议：
- 将低风险材料复核从王敏转给李晨，预计释放 1.5 小时。
- 将机构客户方案评审设为明早第一优先级，减少客户等待。
- 对审计补充说明由领导发起一次正式督办，降低项目延期风险。

我已生成团队负荷热力图、阻塞清单和资源调配建议。你可以选择按人员、部门或任务优先级继续展开。`
    },
    meeting: {
      title: "经营会议准备",
      business: "会议决策",
      summary: ["已生成会议议程。", "已汇总经营、风险、项目和团队材料。", "已提炼需要领导拍板的问题。"],
      nextSteps: ["确认会议议程。", "补充需提前通知负责人的问题。", "生成正式材料包。"],
      actions: ["确认议程", "补充问题", "生成材料包", "发送参会人"],
      artifacts: [["会议议程", "Doc · 5 项"], ["会议材料包", "PPT · 18 页"], ["决策问题清单", "Table · 3 项"]],
      models: [["会议议程生成模型", "已完成"], ["经营摘要模型", "已完成"], ["决策问题提炼模型", "已完成"]],
      references: [["经营日报", "今日版本"], ["风险预警", "引用 6 项"], ["重点项目看板", "引用 12 项"]],
      output: `正在准备经营会议材料：${prompt}

建议会议议程：
1. 今日经营指标与重点机会复盘。
2. 高风险事项和客户投诉趋势处理。
3. 重点项目卡点及责任人督办。
4. 团队协同阻塞与资源调配。
5. 明日重点动作确认。

已整理的会议材料：
- 经营日报：AUM、客户增长、产品销售意向、机构服务动作。
- 风险预警：6 项风险事项，其中 2 项高优先级。
- 项目看板：12 个重点项目，4 个存在卡点。
- 团队负荷：3 名成员高负荷，6 个协同阻塞节点。

建议领导现场拍板的 3 个问题：
- 是否将高净值客户流失挽回列为今日第一优先级。
- 是否由领导对 IPO 项目审计补充说明发起正式督办。
- 是否调整合规复核资源，优先处理客户外发材料。

我已生成会议议程、材料包目录和决策问题清单。你可以让我继续生成 PPT，或直接发送给参会负责人提前准备。`
    },
    business: {
      title: "证券业务推荐",
      business: "业务发展",
      summary: ["已识别可推荐业务方向。", "已匹配客户画像和适当性边界。", "已生成下一步服务动作。"],
      nextSteps: ["确认优先推荐的业务方向。", "选择目标客户范围。", "生成客户沟通材料。"],
      actions: ["确认方向", "筛选客户", "生成材料", "邀请产品"],
      artifacts: [["业务推荐清单", "Table · 6 类"], ["目标客户样本", "CRM · 24 户"], ["沟通话术", "Doc · 待确认"]],
      models: [["客户机会识别模型", "已完成"], ["产品适当性模型", "已完成"], ["业务推荐编排模型", "已完成"]],
      references: [["客户画像", "引用 24 户"], ["资产变动", "近 30 日"], ["历史服务记录", "引用 58 条"]],
      output: `正在生成证券业务推荐：${prompt}

推荐依据：
- 已读取你的岗位画像、近 30 日客户沟通记录、客户资产变化、产品到期提醒和历史服务记录。
- 已按适当性、客户风险承受能力和公司业务边界过滤不适合推荐的方向。

推荐业务方向：
- 财富管理业务推荐：18 户客户存在现金管理或稳健配置需求，预计可形成 2.3 亿元讨论机会。
- 投行业务机会识别：3 家企业客户出现融资、并购或上市辅导相关信号，建议转给投行团队初筛。
- 机构客户服务建议：2 家机构客户近期关注新能源和固收策略，可组合投研观点与交易服务。
- 融资融券业务提醒：9 户客户具备两融使用基础，但需先补充风险揭示与适当性确认。
- 产品适配建议：12 户产品到期客户适合安排再配置沟通，不直接推荐具体收益承诺。
- 客户流失风险挽回：5 户客户近 7 日资产净流出明显，建议今天优先触达。

建议下一步：
- 优先选择“客户流失风险挽回”和“财富管理业务推荐”，因为这两类时效性最高。
- 对投行业务机会只生成线索摘要，不直接对客户承诺服务结果。
- 所有客户沟通材料先经过合规话术模型过滤。

我已生成业务推荐清单和目标客户样本。你可以继续让我按客户分层、业务条线或紧急程度展开。`
    },
    visit: {
      title: "客户拜访准备",
      business: "财富管理",
      summary: ["已读取客户画像和资产变化。", "已匹配拜访重点和服务机会。", "已生成沟通提纲和合规话术。"],
      nextSteps: ["确认拜访重点。", "选择是否生成 PPT。", "邀请产品或合规同事确认。"],
      actions: ["确认重点", "生成 PPT", "邀请同事", "补充客户信息"],
      artifacts: [["拜访提纲", "Doc · 初稿"], ["客户画像摘要", "PDF · 脱敏"], ["沟通话术", "Doc · 待确认"]],
      models: [["客户画像模型", "已完成"], ["产品适当性模型", "已完成"], ["合规话术模型", "已完成"]],
      references: [["CRM 沟通记录", "近 12 个月"], ["资产变化", "近 90 日"], ["产品持仓", "当前有效"]],
      output: `正在准备客户拜访材料：${prompt}

客户画像摘要：
- 客户近 90 日资产净增加 1,240 万元，其中现金类资产占比提升至 38%。
- 最近 3 次沟通都提到“稳健”和“流动性”，风险偏好未出现明显上移。
- 当前持仓中 2 只产品将在 30 日内到期，适合提前安排再配置沟通。

拜访重点：
- 先确认客户近期资金安排和流动性需求。
- 再讨论稳健配置方向，避免直接推荐单一产品。
- 补充风险测评是否需要更新，确保后续服务动作符合适当性要求。

AI 已生成：
- 8 分钟拜访提纲。
- 客户资产变化摘要。
- 合规沟通话术。
- 会后纪要模板。

建议下一步先确认是否采用保守版话术，再生成正式拜访 PPT。`
    },
    compliance: {
      title: "产品材料合规检查",
      business: "合规风控",
      summary: ["已识别材料中的敏感表述。", "已核对适当性匹配关系。", "已生成修订建议。"],
      nextSteps: ["确认 2 个风险点。", "选择一键修订或人工复核。", "生成可外发版本。"],
      actions: ["查看风险", "一键修订", "提交复核", "生成版本"],
      artifacts: [["合规审查报告", "PDF · 2 项风险"], ["修订稿", "PPT · 待确认"]],
      models: [["营销材料审查模型", "已完成"], ["适当性模型", "已完成"], ["制度条款检索模型", "已完成"]],
      references: [["营销材料规范", "2026.06"], ["适当性制度", "引用 5 条"]],
      output: `正在检查产品推荐材料：${prompt}

审查结果：
- 第 4 页“稳健增值”存在收益暗示风险，建议改为“风险收益特征相对稳健”。
- 第 7 页产品适配说明不完整，客户 C3 等级与 R4 产品之间需要补充人工确认。
- 免责声明位置偏后，建议前移到风险说明页。

已完成动作：
- 标注 2 个高优先级风险点。
- 生成修订建议。
- 对照公司营销材料规范和适当性制度完成证据链引用。

建议下一步：
- 先一键修订收益类表述。
- 再提交合规人工复核确认 R4 产品是否保留。
- 复核通过后生成可外发版本。`
    },
    market: {
      title: "市场异动解读",
      business: "投研支持",
      summary: ["已抓取市场异动数据。", "已交叉验证公告、资金和舆情。", "已生成客户沟通短评。"],
      nextSteps: ["确认是否生成客户短评。", "选择是否加深行业分析。", "订阅后续提醒。"],
      actions: ["生成短评", "加深分析", "订阅提醒", "发送客户"],
      artifacts: [["异动快照", "Chart · 实时"], ["客户短评", "Doc · 初稿"]],
      models: [["行情异动模型", "已完成"], ["新闻舆情模型", "已完成"], ["行业景气模型", "已完成"]],
      references: [["行情数据", "实时"], ["公告库", "今日新增 14 条"], ["研究观点", "引用 6 条"]],
      output: `正在解读市场异动：${prompt}

异动概览：
- 新能源板块午后快速拉升，板块指数最高上涨 3.2%。
- 资金流入集中在电池、储能和逆变器方向，头部公司成交明显放大。
- 今日新增公告中，2 家龙头公司订单和产能数据超出市场预期。

交叉验证：
- 资金面：北向与机构席位均有净流入迹象。
- 消息面：产业链价格预期修复，叠加订单公告。
- 舆情面：客户关注度上升，但观点分化明显。

客户沟通建议：
- 不建议直接表达“趋势反转”。
- 可表述为“短期情绪修复和产业链预期改善共同推动”。
- 提醒客户关注波动风险和估值消化压力。`
    },
    material: {
      title: "正式材料生成",
      business: "文档生成",
      summary: ["已识别材料用途。", "已搭建文档结构。", "已加入风险提示和证据来源。"],
      nextSteps: ["确认材料对象。", "选择 PPT 或 Word 版本。", "邀请同事复核。"],
      actions: ["确认对象", "生成 PPT", "生成 Word", "邀请复核"],
      artifacts: [["材料大纲", "Doc · 初稿"], ["正式版本", "生成中"]],
      models: [["文档生成模型", "运行中"], ["业务摘要模型", "已完成"], ["合规话术模型", "已完成"]],
      references: [["任务上下文", "已引用"], ["历史模板", "匹配 3 份"]],
      output: `正在生成正式材料：${prompt}

材料结构：
- 第一部分：背景与目标。
- 第二部分：核心事实和数据依据。
- 第三部分：分析结论。
- 第四部分：风险提示和适当性边界。
- 第五部分：下一步行动建议。

已处理内容：
- 自动匹配 3 份公司历史模板。
- 提取当前任务中的客户、项目、市场或合规要点。
- 将可能对外表述过强的内容改为审慎表达。

建议下一步确认材料使用对象：客户沟通、内部汇报、合规复核或项目推进。`
    },
    minutes: {
      title: "会议纪要整理",
      business: "协同办公",
      summary: ["已整理会议结论。", "已拆解行动项。", "已匹配责任人与截止时间。"],
      nextSteps: ["确认行动项是否准确。", "调整责任人和截止时间。", "发送到项目群。"],
      actions: ["确认待办", "调整责任人", "发送群聊", "生成纪要"],
      artifacts: [["会议纪要", "Doc · 8 条结论"], ["行动项清单", "Task · 5 项"]],
      models: [["会议摘要模型", "已完成"], ["任务拆解模型", "已完成"], ["责任人识别模型", "已完成"]],
      references: [["会议录音", "42 分钟"], ["会议聊天记录", "引用 23 条"]],
      output: `正在整理会议纪要：${prompt}

会议结论：
- 项目材料本周内完成第二轮修订。
- 合规风险表述需要统一口径。
- 客户沟通材料先走内部复核，再对外发送。

行动项：
- 王敏：明天 16:00 前确认适当性说明。
- 李晨：今天下班前补充产品风险提示。
- 张晓：周五前整理客户反馈清单。
- 项目负责人：下周一前确认最终材料版本。

AI 已生成：
- 会议纪要正文。
- 5 条待办事项。
- 责任人和截止时间建议。
- 可发送到项目群的简版摘要。`
    }
  };

  return presets[intent] || buildTopicPreset(prompt, intent) || {
    title: prompt.length > 18 ? `${prompt.slice(0, 18)}...` : prompt,
    business: "AI 自动创建",
    summary: ["已接收员工目标，正在拆解任务路径。", "正在识别所需数据权限、业务原子模型和协同人员。", "完成后将在右上角更新最新状态，并提醒你确认。"],
    nextSteps: ["等待 AI 完成任务拆解。", "补充必要客户、项目或材料信息。", "确认是否生成正式产物。"],
    actions: ["查看任务", "补充信息", "邀请同事", "暂停"],
    artifacts: [["任务拆解草稿", "生成中"]],
    models: [["意图理解模型", "已完成"], ["业务编排模型", "运行中"]],
    references: [["员工输入", "已留痕"]],
    output: `正在创建新任务：${prompt}

任务 Agent 启动：
1. 识别你的工作目标，判断这是一个需要被拆解和持续推进的任务。
2. 抽取关键实体，包括客户、项目、材料、风险点、协同人员和预期产物。
3. 检查需要调用的数据源和业务原子模型。
4. 生成任务卡片上下文，并为后续对话保留独立记忆。

模型与资源调度：
- 调用意图理解模型，确认任务类型和目标边界。
- 调用业务编排模型，拆解执行步骤。
- 检索企业知识库，查找可复用模板、制度条款和历史案例。
- 准备根据任务类型继续调用客户画像、合规审查、投研分析或文档生成等原子模型。

初步处理结果：
- 已为该目标生成独立任务卡片。
- 已建立当前任务上下文，后续你在这张卡片中的输入都会进入同一任务记忆。
- 下一步我会根据你的补充指令继续生成材料、分析风险或邀请同事协同。`
  };
}

function buildNewTaskAgentOutput(prompt) {
  return buildNewTaskPreset(prompt).output;
}

function bindTaskBodyActions(scope) {
  scope.querySelectorAll("[data-task]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const task = tasks.find((item) => item.id === event.currentTarget.dataset.task);
      const action = event.currentTarget.dataset.action;
      if (!task) return;

      sendTaskMessage(task.id, buildInlineActionPrompt(task, action), { source: "inline-action" });
    });
  });

  scope.querySelectorAll("[data-source]").forEach((button) => {
    button.addEventListener("click", (event) => {
      openSourceFile(event.currentTarget.dataset.source);
    });
  });
}

function buildInlineActionPrompt(task, action) {
  if (action.includes("接受")) {
    return `我接受这个协同任务，请在当前会话里同步任务背景、待确认事项和我下一步需要处理的内容。`;
  }

  if (action.includes("邀请")) {
    return `请基于当前任务「${task.title}」生成需要邀请协同同事的建议，并拟好邀请说明。`;
  }

  if (action.includes("确认") || action.includes("同意") || action.includes("通过")) {
    return `我点击了「${action}」，请在当前任务「${task.title}」里继续处理：复核依据、更新状态、生成处理意见，并说明还需要我确认什么。`;
  }

  if (action.includes("生成") || action.includes("材料") || action.includes("通报") || action.includes("提醒")) {
    return `请在当前任务「${task.title}」里执行「${action}」，生成对应内容，并把关键结果、引用依据和下一步动作整理出来。`;
  }

  return `请在当前任务「${task.title}」里继续执行「${action}」，不要跳转页面，直接在本卡片会话中给出处理结果和下一步建议。`;
}

function updateSingleTaskCard(task) {
  updateRefreshButtonState();
  const card = document.getElementById(`card-${task.id}`);
  if (!card) {
    renderTasks();
    return;
  }

  card.classList.toggle("invited-card", Boolean(task.invitation));
  card.classList.toggle("unread-done", Boolean(task.unreadDone));

  const state = card.querySelector(".task-state");
  if (state) {
    state.className = `task-state ${stateClass(task.state)}`;
    state.textContent = task.status;
  }

  const pinButton = card.querySelector("[data-pin]");
  pinButton?.classList.toggle("active", Boolean(task.pinned));

  const meta = card.querySelector(".task-meta");
  if (meta) {
    let unreadTag = meta.querySelector(".unread-tag");
    if (task.unreadDone && !unreadTag) {
      unreadTag = document.createElement("span");
      unreadTag.className = "tag unread-tag";
      unreadTag.textContent = "AI 已回复待查看";
      meta.appendChild(unreadTag);
    }
    if (!task.unreadDone) unreadTag?.remove();
  }

  const body = card.querySelector(".task-body");
  if (body) {
    body.innerHTML = renderTaskBody(task);
    bindTaskBodyActions(body);
  }
}

function sendTaskMessage(taskId, text, options = {}) {
  const task = tasks.find((item) => item.id === taskId);
  const message = text.trim();
  if (!task || !message) return;

  task.conversation.push(["user", message]);
  task.status = "AI 处理中";
  task.state = "running";
  task.progress = Math.min(96, Math.max(task.progress, 68));
  refreshTaskViews(task, true);
  showToast(`「${task.title}」正在处理，可继续操作其他任务`);

  if (message.includes("@")) {
    const name = getMentionName(message) || "同事";
    task.conversation.push(["system", `已邀请 ${name} 加入当前任务，对方工作台会新增一张协同邀请卡片。`]);
    inviteCoworker(task, name, message);
  }

  const reply = buildAiReply(task, message);
  const aiMessage = ["ai", "", { streaming: true }];
  task.conversation.push(aiMessage);
  refreshTaskViews(task, true);

  streamAiReply(task, aiMessage, reply, {
    delay: options.delay ?? 260,
    onDone: () => {
      task.status = message.includes("@") ? "等待同事加入" : "待你确认";
      task.state = "waiting";
      task.progress = Math.min(98, task.progress + 8);
      task.unreadDone = true;
      refreshTaskViews(task, true);
      showToast(`「${task.title}」AI 已回复`);
    }
  });
}

function refreshTaskViews(task, highlight = false) {
  const previousLaneScroll = lane.scrollLeft;
  updateSingleTaskCard(task);
  lane.scrollLeft = previousLaneScroll;
  if (highlight) {
    document.getElementById(`card-${task.id}`)?.classList.add("highlight");
  }
  scrollTaskToLatest(task.id);
  if (activeTaskId === task.id && focusView.classList.contains("open")) {
    renderConversation(task);
  }
}

function streamAiReply(task, aiMessage, fullText, options = {}) {
  let index = 0;
  const step = 2;

  window.setTimeout(() => {
    const timer = window.setInterval(() => {
      index = Math.min(fullText.length, index + step);
      aiMessage[1] = fullText.slice(0, index);
      refreshTaskViews(task);

      if (index >= fullText.length) {
        window.clearInterval(timer);
        aiMessage[2] = { streaming: false };
        options.onDone?.();
      }
    }, 34);
  }, options.delay ?? 260);
}

function scrollTaskToLatest(taskId) {
  const card = document.getElementById(`card-${taskId}`);
  const body = card?.querySelector(".task-body");
  if (!body) return;
  body.scrollTop = body.scrollHeight;
}

function openTask(id, taskOverride = null) {
  const task = taskOverride || tasks.find((item) => item.id === id);
  if (!task) return;
  clearUnreadDone(id, false);
  activeTaskId = id;
  focusTitle.textContent = task.title;
  focusMeta.textContent = `${task.business} · ${task.owner}`;
  focusStatus.textContent = task.status;
  focusStatus.className = `task-state ${stateClass(task.state)}`;
  renderConversation(task);
  renderAssetList(artifactList, task.artifacts);
  renderAssetList(modelList, task.models);
  renderAssetList(referenceList, task.references);
  focusView.classList.add("open");
  focusView.setAttribute("aria-hidden", "false");
}

function closeTask() {
  focusView.classList.remove("open");
  focusView.setAttribute("aria-hidden", "true");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function createTaskFromPrompt(prompt) {
  const id = `task-${Date.now()}`;
  const preset = buildNewTaskPreset(prompt);
  const aiMessage = ["ai", "", { streaming: true }];
  const newTask = {
    id,
    title: preset.title,
    business: preset.business,
    owner: "公司自动驾驶大模型",
    status: "AI 处理中",
    state: "running",
    liveMode: true,
    progress: 12,
    tags: ["任务拆解", "模型调度", "证据生成"],
    summary: preset.summary,
    taskContent: prompt,
    nextSteps: preset.nextSteps,
    actions: preset.actions,
    artifacts: preset.artifacts,
    models: preset.models,
    references: preset.references,
    conversation: [
      ["user", prompt],
      aiMessage
    ]
  };

  tasks.unshift(newTask);
  cardOrder = [id, ...cardOrder.filter((cardId) => cardId !== id)];
  renderTasks();
  const card = document.getElementById(`card-${id}`);
  card?.classList.add("highlight");
  card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  updateLaneArrows();
  showToast("新任务已加入今日任务牌组最前面");

  streamAiReply(newTask, aiMessage, preset.output, {
    delay: 240,
    onDone: () => {
      newTask.status = "待你确认";
      newTask.state = "waiting";
      newTask.progress = 78;
      newTask.unreadDone = true;
      refreshTaskViews(newTask, true);
      showToast(`${newTask.title} 已完成任务拆解，可继续处理`);
    }
  });
}

function inviteCoworker(task, name = "王敏", note = "") {
  task.status = `已邀请${name}`;
  task.state = "waiting";
  showToast(`已邀请${name}加入「${task.title}」任务会话`);
  const card = document.getElementById(`card-${task.id}`);
  card?.classList.add("highlight");

  window.setTimeout(() => {
    task.status = `${name}已加入`;
    task.state = "waiting";
    task.conversation.push(["system", `${name}已进入该任务会话，可以共同查看材料、评论和推进任务。`]);
    task.conversation.push([`person:${name}`, "我已看到当前任务材料和待确认点，先帮你一起看风险表述。"]);
    updateSingleTaskCard(task);
    document.getElementById(`card-${task.id}`)?.classList.add("highlight");
    showToast(`${name}已进入「${task.title}」会话`);
    if (activeTaskId === task.id && focusView.classList.contains("open")) {
      openTask(task.id);
    }
  }, 1800);
}

function addIncomingInvitation() {
  if (incomingInvitationCreated) return;
  incomingInvitationCreated = true;

  const invitedTask = {
    id: "incoming-risk-review",
    title: "协助确认客户风险提示",
    business: "财富管理",
    owner: "张晓",
    status: "协同邀请",
    state: "waiting",
    progress: 62,
    invitation: true,
    invitedBy: "张晓",
    inviteMessage: "请帮我看一下这位客户的产品推荐风险提示是否充分，尤其是第 2 条适当性说明。",
    tags: ["协同邀请", "适当性", "待你判断"],
    summary: [
      "张晓已完成客户基本画像和产品匹配初筛。",
      "AI 标出 2 处需要人工确认的风险提示表述。",
      "邀请你重点判断适当性说明是否足够清晰。"
    ],
    taskContent: "张晓邀请你协助确认客户产品推荐前的风险提示表述，重点看第 2 条适当性说明是否充分。",
    nextSteps: ["接受协作并查看风险提示草稿。", "判断第 2 条适当性说明是否需要补充。", "在卡片输入框中回复张晓处理意见。"],
    actions: ["接受协作", "查看材料", "回复同事", "暂不处理"],
    artifacts: [
      ["客户风险提示草稿", "Doc · 待确认"],
      ["产品适当性核对表", "Table · 2 项待判断"]
    ],
    models: [
      ["产品适当性模型", "已完成"],
      ["合规话术模型", "需人工确认"],
      ["客户画像原子模型", "已完成"]
    ],
    references: [
      ["客户风险测评记录", "有效期内"],
      ["产品说明书", "版本 2026.07"],
      ["张晓的邀请消息", "已留痕"]
    ],
    conversation: [
      ["system", "张晓邀请你加入该任务会话。"],
      ["ai", "我已同步该任务的客户画像、产品匹配结果和风险提示草稿。"],
      ["person:张晓", "请帮我看一下这位客户的产品推荐风险提示是否充分，尤其是第 2 条适当性说明。"]
    ]
  };

  employeeTasks.unshift(invitedTask);
  roleCardOrders.employee = [invitedTask.id, ...(roleCardOrders.employee || []).filter((cardId) => cardId !== invitedTask.id)];
  if (currentRole === "employee") {
    const previousLaneScroll = lane.scrollLeft;
    tasks = employeeTasks;
    cardOrder = [...roleCardOrders.employee];
    renderTasks();
    lane.scrollLeft = previousLaneScroll;
    document.getElementById(`card-${invitedTask.id}`)?.classList.add("highlight");
    updateLaneArrows();
    showToast("你收到一条新的协同邀请，已生成任务卡片");
  }
}

composerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const raw = composerInput.value.trim();
  if (!raw) return;
  composerInput.value = "";

  const addMatch = raw.match(/^添加常用提示词：【(.+?)】$/);
  if (addMatch) {
    const prompt = addMatch[1].trim();
    if (prompt && prompt !== "请输入提示词") {
      const shortLabel = generateShortLabel(prompt);
      addCustomPrompt(shortLabel, prompt);
      createTaskFromPrompt(prompt);
    }
    return;
  }

  createTaskFromPrompt(raw);
});

const quickAddWrap = document.querySelector(".quick-add-wrap");
const quickAddButton = document.getElementById("quickAddButton");
const quickAddMenu = document.getElementById("quickAddMenu");

quickPrompts.addEventListener("click", (event) => {
  // In manage mode, clicking the delete badge removes the prompt
  const deleteBadge = event.target.closest(".prompt-delete-badge");
  if (deleteBadge) {
    event.stopPropagation();
    const btn = deleteBadge.closest(".role-prompt");
    if (!btn) return;
    const key = btn.dataset.promptKey;
    if (btn.classList.contains("custom-prompt")) {
      customPrompts[currentRole] = (customPrompts[currentRole] || []).filter((p) => p.id !== key);
    } else {
      hiddenPresets[currentRole] = hiddenPresets[currentRole] || [];
      hiddenPresets[currentRole].push(key);
    }
    // Also remove from promptOrders
    if (promptOrders[currentRole]) {
      promptOrders[currentRole] = promptOrders[currentRole].filter((k) => k !== key);
    }
    renderQuickPrompts();
    showToast("已移除");
    return;
  }

  // In manage mode, don't trigger normal button actions
  if (quickPrompts.classList.contains("manage-mode")) return;

  const promptButton = event.target.closest("[data-prompt]");
  const shortcutButton = event.target.closest("[data-shortcuts]");
  const shortcutPrompt = event.target.closest("[data-shortcut-prompt]");

  if (promptButton) {
    composerInput.value = promptButton.dataset.prompt;
    composerInput.focus();
    closeShortcutMenu();
    return;
  }

  if (shortcutButton) {
    event.stopPropagation();
    const btnRect = shortcutButton.getBoundingClientRect();
    const containerRect = quickPrompts.getBoundingClientRect();
    const menuWidth = Math.min(480, window.innerWidth - 48);
    let leftPos = btnRect.left - containerRect.left;
    leftPos = Math.max(8, Math.min(leftPos, containerRect.width - menuWidth - 8));
    shortcutMenu.style.left = `${leftPos}px`;
    shortcutMenu.classList.toggle("open");
    shortcutMenu.setAttribute("aria-hidden", String(!shortcutMenu.classList.contains("open")));
    return;
  }

  const shortcutAdd = event.target.closest("[data-shortcut-add]");

  if (shortcutAdd) {
    event.stopPropagation();
    addCustomPrompt(shortcutAdd.dataset.shortLabel, shortcutAdd.dataset.shortcutAdd);
    closeShortcutMenu();
    return;
  }

  if (shortcutPrompt) {
    const prompt = shortcutPrompt.dataset.shortcutPrompt;
    closeShortcutMenu();
    createTaskFromPrompt(prompt);
  }

  const customPromptBtn = event.target.closest("[data-custom-prompt]");
  if (customPromptBtn) {
    composerInput.value = customPromptBtn.dataset.customPrompt;
    composerInput.focus();
    return;
  }
});

quickAddButton.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = quickAddWrap.classList.toggle("open");
  quickAddMenu.setAttribute("aria-hidden", String(!isOpen));
  closeShortcutMenu();
});

quickAddMenu.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.addType;
    if (type === "ai-tool") {
      quickAddWrap.classList.remove("open");
      quickAddMenu.setAttribute("aria-hidden", "true");
      openToolConfig();
      return;
    }

    if (type === "manage-prompts") {
      quickAddWrap.classList.remove("open");
      quickAddMenu.setAttribute("aria-hidden", "true");
      toggleManageMode();
      return;
    }

    if (type === "prompt") {
      quickAddWrap.classList.remove("open");
      quickAddMenu.setAttribute("aria-hidden", "true");
      composerInput.value = "添加常用提示词：【请输入提示词】";
      const start = composerInput.value.indexOf("【") + 1;
      const end = composerInput.value.indexOf("】");
      composerInput.setSelectionRange(start, end);
      composerInput.focus();
      return;
    }

    const labelMap = {
      skill: "已添加 Skill：合规审查助手",
      mcp: "已添加 MCP：客户数据连接器"
    };
    const promptMap = {
      skill: "使用合规审查助手，帮我检查当前任务中的风险表述。",
      mcp: "连接客户数据源，补充客户画像和历史服务记录。"
    };
    composerInput.value = promptMap[type];
    composerInput.focus();
    quickAddWrap.classList.remove("open");
    quickAddMenu.setAttribute("aria-hidden", "true");
    showToast(labelMap[type]);
  });
});

// --- Long-press drag to reorder all prompt buttons ---
(function () {
  let pressTimer = null;
  let dragging = null;
  let dragGhost = null;
  let dragStartX = 0;
  let dragStartY = 0;
  let hasMoved = false;

  function startPress(e) {
    const btn = e.target.closest(".role-prompt");
    if (!btn) return;
    // Only handle primary mouse button or touch
    if (e.button !== undefined && e.button !== 0) return;

    const point = e.touches ? e.touches[0] : e;
    dragStartX = point.clientX;
    dragStartY = point.clientY;
    hasMoved = false;
    dragging = btn;

    clearTimeout(pressTimer);
    pressTimer = setTimeout(() => {
      if (!dragging) return;
      enterDragMode(point);
    }, 300);
  }

  function enterDragMode(point) {
    document.body.classList.add("prompt-reordering");
    dragging.classList.add("prompt-dragging");

    // Create a ghost element that follows the cursor
    const rect = dragging.getBoundingClientRect();
    dragGhost = dragging.cloneNode(true);
    dragGhost.classList.add("prompt-drag-ghost");
    dragGhost.style.width = rect.width + "px";
    dragGhost.style.height = rect.height + "px";
    document.body.appendChild(dragGhost);
    updateGhost(point);
  }

  function updateGhost(point) {
    if (!dragGhost) return;
    dragGhost.style.left = point.clientX + "px";
    dragGhost.style.top = point.clientY + "px";
  }

  function onMove(e) {
    if (!dragging) return;
    const point = e.touches ? e.touches[0] : e;

    if (!dragGhost) {
      // Not yet in drag mode — cancel if moved too much before timer
      const dx = Math.abs(point.clientX - dragStartX);
      const dy = Math.abs(point.clientY - dragStartY);
      if (dx > 5 || dy > 5) {
        clearTimeout(pressTimer);
        dragging = null;
      }
      return;
    }

    e.preventDefault();
    hasMoved = true;
    updateGhost(point);

    // Determine which button the cursor is over
    const buttons = Array.from(quickPrompts.querySelectorAll(".role-prompt"));
    const target = buttons.find((b) => {
      if (b === dragging) return false;
      const r = b.getBoundingClientRect();
      return point.clientX >= r.left && point.clientX <= r.right && point.clientY >= r.top - 10 && point.clientY <= r.bottom + 10;
    });

    if (target) {
      const r1 = dragging.getBoundingClientRect();
      const r2 = target.getBoundingClientRect();
      if (point.clientX < (r2.left + r2.right) / 2) {
        quickPrompts.insertBefore(dragging, target);
      } else {
        quickPrompts.insertBefore(dragging, target.nextSibling);
      }
    }
  }

  function endPress() {
    clearTimeout(pressTimer);
    if (!dragging) return;

    if (dragGhost) {
      dragGhost.remove();
      dragGhost = null;
      document.body.classList.remove("prompt-reordering");
      dragging.classList.remove("prompt-dragging");

      if (hasMoved) {
        const allButtons = Array.from(quickPrompts.querySelectorAll(".role-prompt"));
        promptOrders[currentRole] = allButtons.map((btn) => btn.dataset.promptKey);
      }
    }
    dragging = null;
    hasMoved = false;
  }

  quickPrompts.addEventListener("mousedown", startPress);
  quickPrompts.addEventListener("touchstart", startPress, { passive: true });
  document.addEventListener("mousemove", onMove);
  document.addEventListener("touchmove", onMove, { passive: false });
  document.addEventListener("mouseup", endPress);
  document.addEventListener("touchend", endPress);
})();

document.addEventListener("click", (event) => {
  if (!quickAddWrap.contains(event.target)) {
    quickAddWrap.classList.remove("open");
    quickAddMenu.setAttribute("aria-hidden", "true");
  }
  if (!shortcutMenu.contains(event.target) && !event.target.closest("[data-shortcuts]")) {
    closeShortcutMenu();
  }
  if (quickPrompts.classList.contains("manage-mode") && !quickPrompts.contains(event.target)) {
    quickPrompts.classList.remove("manage-mode");
  }
  if (
    closeTaskModal.classList.contains("open") &&
    !closeTaskModal.contains(event.target) &&
    !event.target.closest("[data-close-task]")
  ) {
    closeCloseTaskDialog();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && quickPrompts.classList.contains("manage-mode")) {
    quickPrompts.classList.remove("manage-mode");
  }
});

document.querySelectorAll("[data-role]").forEach((button) => {
  button.addEventListener("click", () => switchRole(button.dataset.role));
});

document.querySelectorAll("[data-action='incoming-invitation']").forEach((button) => {
  button.addEventListener("click", () => {
    closeUserDropdown();
    if (currentRole !== "employee") {
      showToast("请先切换到一线业务人员视角");
      return;
    }
    if (incomingInvitationCreated) {
      showToast("已有一条协同邀请卡片");
      return;
    }
    addIncomingInvitation();
  });
});

refreshAutopilotTasksButton?.addEventListener("click", refreshAutopilotTasks);

document.getElementById("collapseTask").addEventListener("click", closeTask);
document.getElementById("closeSource").addEventListener("click", closeSourceFile);
document.getElementById("closeToolConfig").addEventListener("click", closeToolConfig);
document.getElementById("applyToolConfig").addEventListener("click", applyToolConfig);

lanePrev.addEventListener("click", () => scrollLane(-1));
laneNext.addEventListener("click", () => scrollLane(1));
lane.addEventListener("scroll", updateLaneArrows);
window.addEventListener("resize", updateLaneArrows);

document.getElementById("taskChatForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("taskChatInput");
  const text = input.value.trim();
  if (!text) return;
  input.value = "";
  sendTaskMessage(activeTaskId, text, { source: "focus", delay: 900 });
});

document.getElementById("openHistory").addEventListener("click", () => {
  document.getElementById("historyDrawer").classList.add("open");
  document.getElementById("drawerBackdrop").classList.add("open");
});

function closeHistory() {
  document.getElementById("historyDrawer").classList.remove("open");
  document.getElementById("drawerBackdrop").classList.remove("open");
}

document.getElementById("closeHistory").addEventListener("click", closeHistory);
document.getElementById("drawerBackdrop").addEventListener("click", closeHistory);

document.querySelectorAll("[data-history-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    historyFilter = button.dataset.historyFilter;
    document.querySelectorAll("[data-history-filter]").forEach((node) => node.classList.remove("active"));
    button.classList.add("active");
    renderHistory();
  });
});

document.getElementById("markDone").addEventListener("click", () => closeTaskCard("done"));
document.getElementById("markUnfinished").addEventListener("click", () => closeTaskCard("unfinished"));
document.getElementById("cancelCloseTask").addEventListener("click", closeCloseTaskDialog);
closeTaskModal.addEventListener("click", (event) => event.stopPropagation());

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeTask();
    closeHistory();
    closeSourceFile();
    closeCloseTaskDialog();
    closeToolConfig();
    closeShortcutMenu();
    closeUserDropdown();
  }
});

/* ── User menu dropdown ── */
const userMenu = document.getElementById("userMenu");
const userTrigger = document.getElementById("userTrigger");
const userDropdown = document.getElementById("userDropdown");

function closeUserDropdown() {
  userMenu?.classList.remove("open");
  userDropdown?.classList.remove("open");
  userDropdown?.setAttribute("aria-hidden", "true");
}

userTrigger?.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = userDropdown.classList.contains("open");
  if (isOpen) {
    closeUserDropdown();
  } else {
    userMenu.classList.add("open");
    userDropdown.classList.add("open");
    userDropdown.setAttribute("aria-hidden", "false");
  }
});

document.addEventListener("click", (e) => {
  if (!userMenu?.contains(e.target)) {
    closeUserDropdown();
  }
});

renderShortcutMenu();
renderQuickPrompts();
renderTasks();
renderHistory();

/* ── Resize handle: drag to adjust panel width ── */
(function initResizeHandle() {
  const handle = document.getElementById("resizeHandle");
  const focusViewEl = document.getElementById("focusView");
  if (!handle || !focusViewEl) return;

  let startX = 0;
  let startRightWidth = 0;
  const MIN_RIGHT = 240;
  const MAX_RIGHT_RATIO = 0.6;

  function getRightWidth() {
    const cols = getComputedStyle(focusViewEl).gridTemplateColumns.split(" ");
    return parseFloat(cols[cols.length - 1]) || 360;
  }

  handle.addEventListener("mousedown", (e) => {
    e.preventDefault();
    startX = e.clientX;
    startRightWidth = getRightWidth();
    handle.classList.add("active");
    document.body.classList.add("resizing");

    function onMove(ev) {
      const delta = startX - ev.clientX;
      const maxRight = window.innerWidth * MAX_RIGHT_RATIO;
      const newRight = Math.min(maxRight, Math.max(MIN_RIGHT, startRightWidth + delta));
      focusViewEl.style.gridTemplateColumns = `minmax(320px, 1fr) 6px ${Math.round(newRight)}px`;
    }

    function onUp() {
      handle.classList.remove("active");
      document.body.classList.remove("resizing");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  });
})();

/* ── Artifact detail view ── */
(function initArtifactDetail() {
  const panel = document.getElementById("artifactPanel");
  const listView = document.getElementById("artifactListView");
  const detailView = document.getElementById("artifactDetailView");
  const detailTitle = document.getElementById("artifactDetailTitle");
  const detailContent = document.getElementById("artifactDetailContent");
  const backButton = document.getElementById("artifactBackButton");
  if (!panel || !listView || !detailView || !backButton) return;

  function getArtifactDetailData(task, section, index) {
    const items = task[section === "artifactList" ? "artifacts" : section === "modelList" ? "models" : "references"];
    if (!items || !items[index]) return null;
    const [name, meta] = items[index];

    const detailTemplates = {
      artifactList: () => ({
        name,
        meta,
        sections: [
          { title: "产物概述", body: `「${name}」已根据任务要求自动生成，当前状态为 ${meta}。` },
          { title: "主要内容", body: `包含与「${task.title}」相关的核心分析结果、数据摘要和处理建议。` },
          { title: "待处理事项", body: `请确认内容准确性，并根据实际情况进行调整或提交。` }
        ]
      }),
      modelList: () => ({
        name,
        meta,
        sections: [
          { title: "模型信息", body: `${name}已在本次任务中完成调度，当前状态：${meta}。` },
          { title: "运行摘要", body: `该模型已对任务输入进行推理，并产出相应的判断结果和证据链。` },
          { title: "关联产物", body: `模型输出已同步至对应的任务产物和证据链中。` }
        ]
      }),
      referenceList: () => ({
        name,
        meta,
        sections: [
          { title: "来源信息", body: `${name}：${meta}。` },
          { title: "引用摘要", body: `已在任务处理过程中被检索和关联，确保决策依据可追溯。` },
          { title: "合规记录", body: `所有引用均已留痕，可在审计和复查中调取。` }
        ]
      })
    };

    return detailTemplates[section] ? detailTemplates[section]() : null;
  }

  function showArtifactDetail(section, index) {
    const task = tasks.find((t) => t.id === activeTaskId);
    if (!task) return;
    const data = getArtifactDetailData(task, section, index);
    if (!data) return;

    detailTitle.textContent = data.name;
    detailContent.innerHTML = `
      <div class="artifact-detail-meta">
        <span class="tag">${data.meta}</span>
        <span class="tag">${task.business}</span>
      </div>
      ${data.sections.map((s) => `
        <div class="artifact-detail-section">
          <h4>${s.title}</h4>
          <p>${s.body}</p>
        </div>
      `).join("")}
    `;

    listView.style.display = "none";
    detailView.style.display = "flex";
  }

  function backToList() {
    detailView.style.display = "none";
    listView.style.display = "";
  }

  panel.addEventListener("click", (e) => {
    const asset = e.target.closest(".asset");
    if (!asset) return;
    const section = asset.dataset.artifactSection;
    const index = parseInt(asset.dataset.artifactIndex, 10);
    if (section != null && !isNaN(index)) {
      showArtifactDetail(section, index);
    }
  });

  backButton.addEventListener("click", backToList);

  const origCloseTask = closeTask;
  closeTask = function () {
    backToList();
    origCloseTask();
  };
})();
