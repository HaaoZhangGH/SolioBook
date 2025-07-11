// 答案数组 - 中英文
const ANSWERS = {
    zh: [
    "千万别在这上面压宝",
    "采取一个大胆的",
    "听取专家的意见",
    "你会发现你自己无法妥协",
    "专注在你的家庭生活上吧",
    "研究，然后享受它",
    "当然",
    "它将无法预测",
    "绝对不",
    "带着好玩的好奇心去探索它",
    "最好等等看",
    "它好像是确定的",
    "乘早做",
    "对别人保密",
    "可能会发生一些令人吃惊的事作为结局",
    "答案可能会是以另一种语言形式来到你身边",
    "你将需要适当调整一下",
    "怀疑它",
    "它将带来好运",
    "你会发现你所需要知道的一切",
    "你将会很开心你这样做了",
    "把它写下来",
    "千万别陷入你的个人感情",
    "改变你的焦点",
    "这时候非常不顺利",
    "用任何你能做到的方式去提升",
    "如果做的很好那可以，否则就再也不要做了",
    "这个时候不要要求更多",
    "避开第一个解决方案",
    "观察，看看会发生什么事",
    "它会影响到其他人怎么看你",
    "你会谈论它",
    "以一个更加轻松的步伐去做吧",
    "最好的解决方法可能不是显而易见的那个",
    "保持灵活性",
    "这不是你所能控制的",
    "享受体验",
    "谨慎的处理",
    "注意细节",
    "当你去做的时候，小心行事",
    "毫无保留的把它说出来",
    "它有非常重要的意义",
    "调整一下重要事项的优先顺序",
    "这是做一个新计划的最好时机",
    "继续前进",
    "做一个为什么不这样的清单",
    "不要等待",
    "它将是你无法忘怀的事，并且将被解决",
    "找更多的选择",
    "履行你自己的义务",
    "稍后处理它",
    "跟随其他人的指引",
    "冒险一次",
    "接受你习惯的改变",
    "你需要采取主动",
    "这可保证不了",
    "情况将会转变的非常快",
    "你讲不得不妥协",
    "你需要更多的信息",
    "相信你最起初的想法",
    "它将引起一场轰动",
    "灾难时极有可能的",
    "迫切要求终止",
    "太多的选择就是太少，要意识到这点很难",
    "是的",
    "更加仔细的聆听，然后你将会知道",
    "答案就在你身边",
    "让它过去吧",
    "那将会浪费钱",
    "全力以赴",
    "你真的不在乎",
    "你需要考虑考虑其他方式",
    "今后一年都没什么好说的",
    "不要浪费你的时间了",
    "他可能是非凡的",
    "数到10，再问一次",
    "这确实已经是事实了",
    "布置优先次序将会是过程中一个必须的部分",
    "运用你的想象力",
    "他一定会很好",
    "确保最好的决定，镇定下来",
    "等待",
    "当你行动的时候，你将需要不断弥补",
    "一笑置之",
    "别人也同样取决于你的选择",
    "你将会后悔的",
    "你知道现在比以前更好了",
    "相信你的直觉",
    "考虑到它的机会",
    "问问你的母亲",
    "可能，当你老的时候",
    "只能做一次",
    "可能",
    "不行",
    "行",
    "你的行动将会改善一切",
    "他将无法预测",
    "一定要确保它",
    "问问你的父亲",
    "绝不",
    "要有耐心点",
    "放弃老的解决方案",
    "不，如果你独自一个人的话",
    "移除你自己的阻碍",
    "最好把你的注意力放在工作上",
    "赌一把",
    "先把其他事完成",
    "带着好玩的好奇心去探索它",
    "最好等等看",
    "你可能有敌对的人",
    "置身其中看不清楚",
    "情况还不清楚",
    "需要一个实质性的努力",
    "先让你自己休息一下",
    "这个机会会不会很快再来",
    "重新考虑你的方法",
    "它将是不可取的",
    "等待一个更好的提议",
    "早点定下来",
    "是的，但是别勉强它",
    "去取得一个更加清晰的视野",
    "实际点",
    "节省你的能量吧",
    "现在你可以",
    "不要做得过火了",
    "它将会帮助你",
    "你将为它付出代价",
    "它肯定会把事情变得有趣",
    "结果会是积极的",
    "随便",
    "他是肯定的",
    "它将是一种乐趣",
    "它是不确定的",
    "更加慷慨点",
    "你可能必须要丢下其他的东西",
    "不用担心",
    "对意外情况要做好准备",
    "他没有什么意义",
    "告诉别人它对你意味着什么",
    "无论你做什么，结果都将会持续下去",
    "保持开放的心态",
    "制作计划的好时机",
    "他可能艰难，但是你会发现它是有价值的",
    "他是一个非常值得注意的麻烦",
    "将会有一个阻碍需要去克服",
    "相关联的问题可能会浮出水面",
    "你肯定需要支持",
    "协助将会使你想成功发展",
    "合作将会是至关重要的",
    "别傻了，想点有用的",
    "不能失败",
    "温和的坚持会有回报的",
    "你将不会失望",
    "找出更多的提议",
    "他可能是一个木已成舟的事",
    "贯彻你的良好心愿",
    "花点时间去决定",
    "不要被迫太快行动",
    "不要忽略那些显而易见的事",
    "你必须现在行动",
    "他不值得努力",
    "如果你不抵抗",
    "遵守规则",
    "别忘记了享受乐趣",
    "早点行动",
    "按照专家的意见",
    "此时你无法掌控",
    "你自己知道就好",
    "关注你的日常生活",
    "看上去是这样子的",
    "采取冒险的态度",
    "结果会令人吃惊",
    "你的行动会促进事情的进展",
    "你需要慢慢适应",
    "避免第一种结论",
    "这件事会影响别人怎么看待你",
    "此时不宜",
    "这跟另一种情况有很大的关系",
    "按照别人告诉你的方式去做",
    "做得好就去做，做不好玩去别做",
    "尽你所能做得更好",
    "你会知道最终结果",
    "你会为你现在所做的感到高兴",
    "以书写的形式去表达",
    "最佳方案不会那么显而易见",
    "请控制自己的情绪",
    "继续",
    "一笑而过",
    "好好享受这次经历",
    "情况将会很快改变",
    "以更加舒缓的节奏进行",
    "转移你的注意力",
    "勇敢说出来",
    "优先做更重要的事",
    "你需要妥协",
    "需要更多的努力",
    "有些事情你无法忘记",
    "冒一次陷",
    "做平淡中接受一些改变",
    "期待事情能够定下来",
    "这很重要",
    "当局者迷",
    "排除杂念",
    "形式尚不明朗",
    "大方一点",
    "那将是一件愉快的事",
    "放手一博"
    ],
    en: [
        "Don't be on it",
        "Talk a bold attitude",
        "Listen to the opinions of the experts",
        "You'll find yourself unable to compromise",
        "Focus on your family life",
        "Study, and enjoy it",
        "Of course",
        "It will not be predictable",
        "Absolutely not",
        "Explore it with fun curiosity",
        "It's better to wait and see",
        "It seems to be certain",
        "Do as early as possible",
        "Confidentiality to others",
        "Some surprising things may happen as a result",
        "The answer may come to you in another language",
        "You will need to adjust it properly",
        "Doubt it",
        "It will bring good luck",
        "You will find everything you need to know",
        "You're going to be happy that you did it",
        "Write it down",
        "Never fall into your personal feelings",
        "Change your focus",
        "It was a very bad time",
        "Go up with any way you can do it",
        "If it's done very well, if not, don't do it again",
        "Don't ask for more at this time",
        "Avoid the first solution",
        "Look, see what's going to happen",
        "It will affect how other people look at you",
        "You'll talk about it",
        "Do it at a more relaxed pace",
        "The best solution may not be the obvious one",
        "Maintain flexibility",
        "This is not what you can control",
        "Enjoy the experience",
        "Handle with caution",
        "Pay attention to the details",
        "Be careful when you are going to do it",
        "Say it without reservations",
        "It has a very important meaning",
        "Replace the priorities of important matters",
        "This is the best time to make a new plan",
        "Move on",
        "Make a list of why not",
        "Do not wait",
        "It will be something you can't forget, and it will be solved",
        "Find more options",
        "Fulfill your own obligations",
        "Deal with it later",
        "Follow the guidance of others",
        "Take a chance",
        "Accept the change you are used to",
        "You need to take the initiative",
        "This can't be guaranteed",
        "The situation is going to change very quickly",
        "You will have to compromise",
        "You need more information",
        "Believe in your first thoughts",
        "It will cause a sensation",
        "Disaster is extremely possible",
        "Urgent demand for termination",
        "It's hard to realize that too many choices are too little",
        "Yes",
        "Listen more carefully, and then you'll know",
        "The answer is around you",
        "Let it pass",
        "That would be a waste of money",
        "Go to all lengths",
        "You don't really care",
        "You need to think about other ways",
        "There's nothing to say about the year from now on",
        "Don't waste your time",
        "He may be extraordinary",
        "Count to 10, ask again",
        "It's true that it's already true",
        "Prioritization will be a necessary part of the process",
        "Use your imagination",
        "He must be good",
        "Make sure the best decision, calm down",
        "Wait for",
        "When you act, you will need to make up for it",
        "Laugh out of court",
        "Other people also depend on your choice",
        "You'll regret it",
        "You know it's better now than before",
        "Believe in your intuition",
        "Consider its opportunity",
        "Ask your mother",
        "Maybe, when you're old",
        "Can only do it once",
        "Probably",
        "No way",
        "That's ok",
        "Your action will improve everything",
        "He will still be unpredictable",
        "Be sure to make sure of it",
        "Ask your father",
        "Never",
        "Be patient",
        "Give up the old solution",
        "No, if you're alone",
        "Remove your own obstacles",
        "It's better to focus on your work",
        "Make a bet",
        "Do something else first",
        "Explore it with fun curiosity",
        "It's better to wait and see",
        "You may have a hostile person",
        "You're too close to see",
        "The situation is not clear",
        "A substantial effort is needed",
        "Let yourself take a rest first",
        "This opportunity won't come back soon",
        "Reconsider your method",
        "It will be undesirable",
        "Wait for a better proposal",
        "Set it early",
        "Yes, but don't force it",
        "To get a clearer view",
        "Actual point",
        "Save your energy",
        "Now you can",
        "Don't overdo it",
        "It will help you",
        "You will pay for it",
        "It's sure to make things interesting",
        "The result will be positive",
        "Whatever",
        "He is sure",
        "It will be a pleasure",
        "It's not sure",
        "More generous",
        "You may have to drop something else",
        "Never mind",
        "Prepare for the accident",
        "He has nothing to do with it",
        "Tell others what it means to you",
        "No matter what you do, the result will last",
        "Keep an open mind",
        "A good time to make plans",
        "He may be hard, but you'll find it worthwhile",
        "He is a very noteworthy problem",
        "There will be a hindrance to be overcome",
        "The associated problems may emerge",
        "You must need support",
        "Help will make you want to develop successfully",
        "Cooperation will be crucial",
        "Do not be silly, think useful",
        "Cannot fail",
        "A gentle insistence will be rewarded",
        "You will not be disappointed",
        "Find out more proposals",
        "He may be a what is done cannot be undone",
        "Carry out your good wishes",
        "Spend more time to decide",
        "Don't be forced to act too fast",
        "Don't ignore the obvious things",
        "You have to act now",
        "He is not worth the effort",
        "If you do not resist",
        "Toe the mark",
        "Don't forget to enjoy the fun",
        "Early action",
        "Follow the advice of experts",
        "That's out of your control",
        "Keep it to yourself",
        "Pay attention to your daily life",
        "It looks like this",
        "Take an adventurous attitude",
        "The result would be surprising",
        "Your action will promote the progress of things",
        "You will need to accommodate",
        "Avoid the first conclusion",
        "This will affect what others think of you",
        "It is not suitable at this time",
        "This has a lot to do with the other case",
        "Do it according to what others tell you",
        "If it's done well; if not, don't do it at all",
        "Do as much as you can",
        "You will know the end result",
        "You'll be happy for what you're doing",
        "Express in the form of writing",
        "The best plan won't be so obvious",
        "Please control your emotions",
        "Go on",
        "Laugh it off",
        "Enjoy the experience",
        "Things will change soon",
        "In a more soothing rhythm",
        "Shift your focus",
        "Speak up bravely",
        "Give priority to more important things",
        "You need to compromise",
        "More effort is needed",
        "There are some things you can't forget",
        "Take a chance",
        "Accept some change in the mundane",
        "Expect things to be settled",
        "It's important",
        "Those closely involved cannot see clearly",
        "Eliminate distractions",
        "The situation is unclear",
        "Be more generous",
        "It will be a pleasure",
        "Bet on it"
    ]
};

// 随机占位符文案 - 中英文
const PLACEHOLDER_TEXTS = {
    zh: [
    '写下你的困惑',
    '写下疑惑，看看宇宙的暗示',
    '有困惑交给解忧之书',
    '让书页为你指引方向',
    '写下心事，答案自会浮现',
    '大胆提问，解忧之书会回应你',
    '犹豫不决，抽一签吧',
    '有些决定，不妨交给命运',
    '犹豫不决时，你需要一个暗示',
    '让解忧之书为你的犹豫点一盏灯',
    '看看命运想对你说什么',
    '你需要一些勇气'
    ],
    en: [
        'Write down your confusion',
        'Write your doubts, see the universe\'s hints',
        'Leave your confusion to the Book of Solace',
        'Let the pages guide your way',
        'Write your thoughts, answers will emerge',
        'Ask boldly, the Book of Solace will respond',
        'When in doubt, draw a sign',
        'Some decisions, leave to fate',
        'When uncertain, you need a hint',
        'Let the Book of Solace light your way',
        'See what destiny wants to tell you',
        'You need some courage'
    ]
};

// DOM 元素
const questionInput = document.getElementById('questionInput');
const placeholderText = document.getElementById('placeholderText');
const seekAnswerBtn = document.getElementById('seekAnswerBtn');
const answerSection = document.getElementById('answerSection');
const answerText = document.getElementById('answerText');
const answerPage = document.getElementById('answerPage');
const saveBtn = document.getElementById('saveBtn');
const newQuestionBtn = document.getElementById('newQuestionBtn');
const historyBtn = document.getElementById('historyBtn');
const historyPage = document.getElementById('historyPage');
const closeHistoryBtn = document.getElementById('closeHistory');
const historyList = document.getElementById('historyList');
const actionButtons = document.getElementById('actionButtons');
const mainContent = document.getElementById('mainContent');
const dateDisplay = document.getElementById('dateDisplay');

// 状态变量
let isHolding = false;
let holdInterval = null;
let currentAnswer = null;
let currentAnswerIndex = null;
let history = JSON.parse(localStorage.getItem('answerBookHistory') || '[]');

// 全局toast相关
let toastTimer = null;
let lastDeletedHistory = null;

let holdStartTime = null;

// 新增全局变量
let currentRollingAnswer = null;
let currentRollingIndex = null;

let lastPlaceholderIdx = -1;

let isEnterHolding = false; // 新增标志位
let enterDown = false; // 新增，防止多次触发

// 全局中英文文案映射
const LANG = {
    zh: {
        history: '解忧册',
        export: '导出收藏',
        import: '导入数据',
        switchLang: '切换语言',
        switchLangEn: '切换语言',
        save: '收录',
        newQ: '新的问题',
        empty: '暂无收藏',
        close: '✕',
        preview: '结果预览',
        merge: '合并历史',
        cover: '覆盖导入',
        mergeMode: '合并方式',
        importTitle: '导入历史数据',
        importDescMerge: '合并历史：将导入内容与本地历史合并，并自动去重（按"问题+答案+日期"唯一）。建议导入前先导出备份。',
        importDescCover: '覆盖导入：会清空所有本地历史，仅保留导入内容，操作不可撤销。建议导入前先导出备份。',
        importBtn: '导入',
        cancel: '取消',
        delete: '删除',
        page: '页码',
        loading: '正在翻阅...',
        seek: '按住翻阅答案',
        placeholder: '写下你的困扰',
        loadingTip: '犹豫不决时，你需要一个指引和暗示',
        noHistoryExport: '暂无历史可导出',
        saveSuccess: '收录成功',
        deleteSuccess: '删除成功',
        undo: '撤销',
        collection: '解忧册',
        seeking: '正在翻阅...',
    },
    en: {
        history: 'SolioBook',
        export: 'Export',
        import: 'Import',
        switchLang: 'Switch Language',
        switchLangEn: 'Switch Language',
        save: 'Collect',
        newQ: 'New Question',
        empty: 'No Collection',
        close: '✕',
        preview: 'Preview',
        merge: 'Merge',
        cover: 'Overwrite',
        mergeMode: 'Merge Mode',
        importTitle: 'Import History',
        importDescMerge: 'Merge: Combine imported and local history, remove duplicates (unique by question+answer+date). Please backup before importing.',
        importDescCover: 'Overwrite: Clear all local history, keep only imported data. Irreversible. Please backup before importing.',
        importBtn: 'Import',
        cancel: 'Cancel',
        delete: 'Delete',
        page: 'Page',
        loading: 'Loading...',
        seek: 'Hold to seek answer',
        placeholder: 'Type your question',
        loadingTip: 'When in doubt, you need guidance and hints',
        noHistoryExport: 'No collection to export',
        saveSuccess: 'Collected',
        deleteSuccess: 'Deleted successfully',
        undo: 'Undo',
        collection: 'SolioBook',
        seeking: 'Seeking...',
    }
};
let currentLang = 'zh';

// 语言和暗黑模式切换
function setLang(isEn) {
    currentLang = isEn ? 'en' : 'zh';
    const L = LANG[currentLang];
    
    // 保存语言偏好到localStorage
    localStorage.setItem('answerBookLanguage', currentLang);
    
    // 动态切换网页标题
    if (currentLang === 'en') {
        document.title = 'SolioBook';
    } else {
        document.title = '解忧之书';
    }
    
    // 顶部按钮
    if(document.getElementById('historyBtn')) document.getElementById('historyBtn').textContent = L.history;
    if(document.getElementById('historyTitle')) document.getElementById('historyTitle').textContent = L.history;
    // 下拉菜单
    if(document.getElementById('menuExportText')) document.getElementById('menuExportText').textContent = L.export;
    if(document.getElementById('menuImportText')) document.getElementById('menuImportText').textContent = L.import;
    if(document.getElementById('menuLangText')) document.getElementById('menuLangText').textContent = L.switchLang;
    // 加载页
    if(document.getElementById('loadingTip')) document.getElementById('loadingTip').textContent = L.loadingTip;
    // 输入区
    if(document.getElementById('placeholderText')) {
        // 语言切换时重新设置随机占位符
        setRandomPlaceholder();
    }
    // 底部按钮
    if(document.getElementById('seekBtnText')) document.getElementById('seekBtnText').textContent = L.seek;
    if(document.getElementById('seekBtnLoading')) document.getElementById('seekBtnLoading').textContent = L.loading;
    if(document.getElementById('saveBtn')) document.getElementById('saveBtn').textContent = L.save;
    if(document.getElementById('newQuestionBtn')) document.getElementById('newQuestionBtn').textContent = L.newQ;
    // 弹窗、空状态、关闭按钮、预览等
    document.querySelectorAll('.import-modal-title').forEach(e=>e.textContent=L.importTitle);
    document.querySelectorAll('.import-mode-merge').forEach(e=>e.textContent=L.merge);
    document.querySelectorAll('.import-mode-cover').forEach(e=>e.textContent=L.cover);
    document.querySelectorAll('.import-mode-desc').forEach(e=>e.textContent=L.importDescMerge);
    document.querySelectorAll('.import-modal-actions .import-confirm').forEach(e=>e.textContent=L.importBtn);
    document.querySelectorAll('.import-modal-actions .import-cancel').forEach(e=>e.textContent=L.cancel);
    document.querySelectorAll('.close-btn').forEach(e=>e.textContent=L.close);
    document.querySelectorAll('.empty-text').forEach(e=>e.textContent=L.empty);
    document.querySelectorAll('.import-mode-preview>div:first-child').forEach(e=>e.textContent=L.preview);
    
    // 如果当前有答案，更新为对应语言的答案
    if (currentAnswer !== null && currentAnswerIndex !== null) {
        const currentAnswers = ANSWERS[currentLang];
        if (currentAnswers && currentAnswers[currentAnswerIndex]) {
            currentAnswer = currentAnswers[currentAnswerIndex];
            if (answerText) {
                answerText.textContent = currentAnswer;
    }
        }
    }
    
    // 更新日期显示
    showCurrentDate();
}

// 工具函数：将日期字符串转为时间戳，支持"YYYY/MM/DD"或"YYYY-MM-DD"或"YYYY.MM.DD"格式
function parseDateToTimestamp(dateStr) {
    if (!dateStr) return 0;
    // 替换为标准格式
    const s = dateStr.replace(/[./]/g, '-');
    const d = new Date(s);
    return isNaN(d.getTime()) ? 0 : d.getTime();
}

function setRandomPlaceholder() {
    if (!placeholderText) return;
    const texts = PLACEHOLDER_TEXTS[currentLang] || PLACEHOLDER_TEXTS.zh;
    let idx;
    do {
        idx = Math.floor(Math.random() * texts.length);
    } while (texts.length > 1 && idx === lastPlaceholderIdx);
    placeholderText.textContent = texts[idx];
    lastPlaceholderIdx = idx;
}

// 加载页逻辑
window.addEventListener('DOMContentLoaded', function() {
    const loadingPage = document.getElementById('loadingPage');
    const countdown = document.getElementById('loadingCountdown');
    // 移除顶部日期相关逻辑
    if (loadingPage && countdown) {
        let timeLeft = 3;
        countdown.textContent = timeLeft;
        const timer = setInterval(() => {
            timeLeft--;
            countdown.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                loadingPage.style.opacity = '0';
                setTimeout(() => {
                    loadingPage.style.display = 'none';
                }, 350);
            }
        }, 1000);
    }
});

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    setRandomPlaceholder();
    if (historyList) {
        loadHistory();
    }
    setupEventListeners();
    updateButtonState();
    showCurrentDate();
    updateHistoryCount();

    // 顶部菜单下拉交互
    const menuBtn = document.getElementById('settingsMenuBtn');
    const menuDropdown = document.getElementById('settingsMenuDropdown');
    const menuExport = document.getElementById('menuExport');
    const menuImport = document.getElementById('menuImport');
    let menuTimer = null;
    let isDropdownOpen = false; // 跟踪下拉菜单状态
    
    if (menuBtn && menuDropdown) {
        console.log('设置菜单按钮和下拉菜单已找到'); // 调试日志
        
        // 桌面端鼠标事件
        menuBtn.addEventListener('mouseenter', () => {
            clearTimeout(menuTimer);
            menuDropdown.style.display = 'flex';
            isDropdownOpen = true;
        });
        menuBtn.addEventListener('mouseleave', () => {
            menuTimer = setTimeout(() => {
                menuDropdown.style.display = 'none';
                isDropdownOpen = false;
            }, 180);
        });
        menuDropdown.addEventListener('mouseenter', () => {
            clearTimeout(menuTimer);
            menuDropdown.style.display = 'flex';
            isDropdownOpen = true;
        });
        menuDropdown.addEventListener('mouseleave', () => {
            menuTimer = setTimeout(() => {
                menuDropdown.style.display = 'none';
                isDropdownOpen = false;
            }, 180);
        });
        
        // 移动端触摸事件
        menuBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('触摸菜单按钮'); // 调试日志
            
            // 立即切换状态，不使用延迟
            if (isDropdownOpen) {
                // 如果已经打开，则关闭
                menuDropdown.style.display = 'none';
                isDropdownOpen = false;
                console.log('关闭下拉菜单');
            } else {
                // 如果关闭，则打开
                menuDropdown.style.display = 'flex';
                isDropdownOpen = true;
                console.log('打开下拉菜单');
            }
        });
        
        // 添加点击事件作为备用
        menuBtn.addEventListener('click', (e) => {
            // 在移动端，点击事件可能会在触摸事件之后触发
            // 所以我们只在非触摸设备上处理点击
            if (!('ontouchstart' in window)) {
                e.preventDefault();
                console.log('点击菜单按钮');
                
                if (isDropdownOpen) {
                    menuDropdown.style.display = 'none';
                    isDropdownOpen = false;
                    console.log('关闭下拉菜单');
                } else {
                    menuDropdown.style.display = 'flex';
                    isDropdownOpen = true;
                    console.log('打开下拉菜单');
                }
            }
        });
        
        // 点击其他地方关闭下拉菜单
        document.addEventListener('click', (e) => {
            if (isDropdownOpen && !menuBtn.contains(e.target) && !menuDropdown.contains(e.target)) {
                menuDropdown.style.display = 'none';
                isDropdownOpen = false;
                console.log('点击其他地方关闭菜单');
            }
        });
        
        // 触摸其他地方关闭下拉菜单（移动端）
        document.addEventListener('touchstart', (e) => {
            // 立即处理，不使用延迟
            if (isDropdownOpen && !menuBtn.contains(e.target) && !menuDropdown.contains(e.target)) {
                menuDropdown.style.display = 'none';
                isDropdownOpen = false;
                console.log('触摸其他地方关闭菜单');
            }
        });
    }
    // 语言切换
    let isEn = localStorage.getItem('answerBookLanguage') === 'en';
    const menuLang = document.getElementById('menuLang');
    if (menuLang) {
        // 桌面端点击事件
        menuLang.addEventListener('click', function() {
        isEn = !isEn;
        setLang(isEn);
            // 标记用户手动切换过语言
            userManuallySwitched = true;
            console.log('用户手动切换语言:', isEn ? '英文' : '中文');
            // 移动端：点击菜单项后关闭下拉菜单
            if (menuDropdown) {
                menuDropdown.style.display = 'none';
                isDropdownOpen = false;
            }
        });
        
        // 移动端触摸事件
        menuLang.addEventListener('touchstart', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            setTimeout(() => {
                isEn = !isEn;
                setLang(isEn);
                // 标记用户手动切换过语言
                userManuallySwitched = true;
                console.log('用户手动切换语言:', isEn ? '英文' : '中文');
                // 移动端：点击菜单项后关闭下拉菜单
                if (menuDropdown) {
                    menuDropdown.style.display = 'none';
                    isDropdownOpen = false;
                }
            }, 50);
        });
    }
    
    // 智能语言检测：优化性能的检测策略
    let userManuallySwitched = false; // 标记用户是否手动切换过
    let lastCheckTime = 0; // 上次检查时间
    
    // 检查浏览器语言是否发生变化
    function checkBrowserLanguageChange() {
        const now = Date.now();
        const currentBrowserLang = navigator.language || navigator.userLanguage;
        const savedBrowserLang = localStorage.getItem('answerBookBrowserLanguage');
        
        // 如果用户手动切换过，且距离上次检查时间太短，跳过检查
        if (userManuallySwitched && (now - lastCheckTime) < 300000) { // 5分钟内不重复检查
            return;
        }
        
        if (savedBrowserLang && savedBrowserLang !== currentBrowserLang) {
            // 浏览器语言发生变化
            console.log('检测到浏览器语言变化:', savedBrowserLang, '→', currentBrowserLang);
            
            // 如果用户没有手动切换过，则自动切换
            if (!userManuallySwitched) {
                const detectedLang = detectUserLanguage();
                if (detectedLang !== isEn) {
                    isEn = detectedLang;
                    setLang(isEn);
                    console.log('自动切换语言:', isEn ? '英文' : '中文');
                }
            }
        }
        
        // 保存当前浏览器语言和检查时间
        localStorage.setItem('answerBookBrowserLanguage', currentBrowserLang);
        lastCheckTime = now;
    }
    
    // 页面加载时检查一次
    checkBrowserLanguageChange();
    
    // 优化：只在页面可见时检查，减少性能影响
    let languageCheckInterval = null;
    
    function startLanguageCheck() {
        if (!languageCheckInterval && !userManuallySwitched) {
            // 如果用户没有手动切换过，才启动定期检查
            // 每5分钟检查一次（进一步减少频率）
            languageCheckInterval = setInterval(checkBrowserLanguageChange, 300000);
        }
    }
    
    function stopLanguageCheck() {
        if (languageCheckInterval) {
            clearInterval(languageCheckInterval);
            languageCheckInterval = null;
        }
    }
    
    // 页面可见时开始检查，隐藏时停止检查
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            stopLanguageCheck();
        } else {
            startLanguageCheck();
        }
    });
    
    // 页面加载时开始检查
    startLanguageCheck();
    
    // 监听浏览器语言变化事件（部分浏览器支持）
    if ('languagechange' in window) {
        window.addEventListener('languagechange', function() {
            console.log('浏览器语言变化事件触发');
            checkBrowserLanguageChange();
        });
    }
    
    // 添加重置语言检测功能（开发测试用）
    window.resetLanguageDetection = function() {
        localStorage.removeItem('answerBookLanguage');
        location.reload();
    };
    
    // 添加语言检测调试功能
    window.debugLanguageDetection = function() {
        console.log('=== 语言检测调试 ===');
        console.log('浏览器语言:', navigator.language || navigator.userLanguage);
        console.log('系统时区:', Intl.DateTimeFormat().resolvedOptions().timeZone);
        console.log('当前语言:', currentLang);
        console.log('已保存的语言:', localStorage.getItem('answerBookLanguage'));
        console.log('用户是否手动切换过:', userManuallySwitched);
        console.log('检测结果:', detectUserLanguage() ? '英文' : '中文');
        console.log('定期检查是否开启:', !!languageCheckInterval);
        console.log('页面是否可见:', !document.hidden);
    };
    
    // 模拟浏览器语言变化（测试用）
    window.simulateLanguageChange = function(newLang) {
        console.log('模拟浏览器语言变化:', newLang);
        localStorage.setItem('answerBookBrowserLanguage', newLang);
        checkBrowserLanguageChange();
    };
    
    // 自动检测用户语言偏好
    function detectUserLanguage() {
        // 1. 如果用户手动切换过，优先使用已保存的语言设置
        const savedLang = localStorage.getItem('answerBookLanguage');
        if (savedLang && userManuallySwitched) {
            return savedLang === 'en' ? true : false;
        }
        
        // 2. 检测浏览器语言设置
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang) {
            // 检查是否为中文相关语言
            const chineseLangs = ['zh', 'zh-CN', 'zh-TW', 'zh-HK', 'zh-SG'];
            const isChinese = chineseLangs.some(lang => 
                browserLang.toLowerCase().startsWith(lang.toLowerCase())
            );
            return !isChinese; // 非中文则使用英文
        }
        
        // 3. 检测系统时区（作为辅助判断）
        try {
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const chineseTimezones = ['Asia/Shanghai', 'Asia/Hong_Kong', 'Asia/Taipei', 'Asia/Singapore'];
            const isChineseTimezone = chineseTimezones.includes(timezone);
            return !isChineseTimezone;
        } catch (e) {
            // 时区检测失败，使用默认值
        }
        
        // 4. 可选：IP地理位置检测（需要网络请求）
        // 注意：这会增加加载时间，建议在需要时再启用
        // 如果需要启用IP检测，请取消下面的注释
        /*
        try {
            // 使用免费的IP地理位置API
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            
            // 中文地区列表
            const chineseCountries = ['CN', 'TW', 'HK', 'SG'];
            const chineseRegions = ['China', 'Taiwan', 'Hong Kong', 'Singapore'];
            
            // 检查国家代码或地区名称
            const isChineseCountry = chineseCountries.includes(data.country_code) || 
                                   chineseRegions.some(region => 
                                       data.country_name && data.country_name.includes(region)
                                   );
            
            console.log('IP检测结果:', data.country_code, data.country_name, isChineseCountry);
            return !isChineseCountry;
        } catch (e) {
            console.log('IP检测失败:', e.message);
            // IP检测失败，继续使用其他方法
        }
        */
        
        // 5. 默认使用中文
        return false;
    }
    
    // 初始化语言设置
    const detectedLang = detectUserLanguage();
    if (detectedLang !== isEn) {
        isEn = detectedLang;
        setLang(isEn);
    }
    
    // 开发测试功能：在控制台可以手动测试语言检测
    window.testLanguageDetection = function() {
        console.log('=== 语言检测测试 ===');
        console.log('浏览器语言:', navigator.language || navigator.userLanguage);
        console.log('系统时区:', Intl.DateTimeFormat().resolvedOptions().timeZone);
        console.log('当前语言:', currentLang);
        console.log('检测结果:', detectUserLanguage() ? '英文' : '中文');
        
        // 模拟不同语言环境
        console.log('\n=== 模拟测试 ===');
        
        // 模拟英文环境
        const originalLang = navigator.language;
        Object.defineProperty(navigator, 'language', {
            value: 'en-US',
            writable: true
        });
        console.log('模拟英文环境:', detectUserLanguage() ? '英文' : '中文');
        
        // 恢复原设置
        Object.defineProperty(navigator, 'language', {
            value: originalLang,
            writable: true
        });
        
        // 模拟中文环境
        Object.defineProperty(navigator, 'language', {
            value: 'zh-CN',
            writable: true
        });
        console.log('模拟中文环境:', detectUserLanguage() ? '英文' : '中文');
        
        // 恢复原设置
        Object.defineProperty(navigator, 'language', {
            value: originalLang,
            writable: true
        });
    };
    
    // 在控制台输入 testLanguageDetection() 即可测试
    // 导出数据
    if (menuExport) {
        // 桌面端点击事件
        menuExport.onclick = function() {
            menuDropdown.style.display = 'none';
            isDropdownOpen = false;
            const history = JSON.parse(localStorage.getItem('answerBookHistory') || '[]');
            if (!history.length) {
                showGlobalToast(LANG[currentLang].noHistoryExport);
                return;
            }
            let csv = '问题,答案,日期,页码\n';
            history.forEach(item => {
                const q = (item.question||'').replace(/"/g,'""').replace(/\n/g, ' ');
                const a = (item.answer||'').replace(/"/g,'""').replace(/\n/g, ' ');
                csv += `"${q}","${a}","${item.date||''}",${item.page||''}\n`;
            });
            const blob = new Blob([csv], {type: 'text/csv'});
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = (currentLang === 'en' ? 'SolioBook_History.csv' : '解忧之书历史.csv');
            a.click();
            URL.revokeObjectURL(url);
        };
        
        // 移动端触摸事件
        menuExport.addEventListener('touchstart', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            setTimeout(() => {
                menuDropdown.style.display = 'none';
                isDropdownOpen = false;
                const history = JSON.parse(localStorage.getItem('answerBookHistory') || '[]');
                if (!history.length) {
                    showGlobalToast(LANG[currentLang].noHistoryExport);
                    return;
                }
                let csv = '问题,答案,日期,页码\n';
                history.forEach(item => {
                    const q = (item.question||'').replace(/"/g,'""').replace(/\n/g, ' ');
                    const a = (item.answer||'').replace(/"/g,'""').replace(/\n/g, ' ');
                    csv += `"${q}","${a}","${item.date||''}",${item.page||''}\n`;
                });
                const blob = new Blob([csv], {type: 'text/csv'});
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = (currentLang === 'en' ? 'SolioBook_History.csv' : '解忧之书历史.csv');
                a.click();
                URL.revokeObjectURL(url);
            }, 50);
        });
    }
    // 导入数据
    if (menuImport) {
        // 桌面端点击事件
        menuImport.onclick = function() {
            menuDropdown.style.display = 'none';
            isDropdownOpen = false;
            let importFile = document.getElementById('importHistoryFile');
            if (!importFile) {
                importFile = document.createElement('input');
                importFile.type = 'file';
                importFile.id = 'importHistoryFile';
                importFile.accept = '.json,.csv,.txt';
                importFile.style.display = 'none';
                document.body.appendChild(importFile);
            }
            importFile.value = '';
            importFile.click();
            importFile.onchange = function(e) {
                if (!importFile.files.length) return;
                const file = importFile.files[0];
                showImportConfirm(file);
            };
        };
        
        // 移动端触摸事件
        menuImport.addEventListener('touchstart', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            setTimeout(() => {
                menuDropdown.style.display = 'none';
                isDropdownOpen = false;
                let importFile = document.getElementById('importHistoryFile');
                if (!importFile) {
                    importFile = document.createElement('input');
                    importFile.type = 'file';
                    importFile.id = 'importHistoryFile';
                    importFile.accept = '.json,.csv,.txt';
                    importFile.style.display = 'none';
                    document.body.appendChild(importFile);
                }
                importFile.value = '';
                importFile.click();
                importFile.onchange = function(e) {
                    if (!importFile.files.length) return;
                    const file = importFile.files[0];
                    showImportConfirm(file);
                };
            }, 50);
        });
    }

    // 语言切换开关逻辑
    const langToggle = document.getElementById('langToggle');
    const sliderText = document.querySelector('.lang-slider .slider-text');
    function syncLangSwitch() {
        if (!langToggle || !sliderText) return;
        if (langToggle.checked) {
            sliderText.innerHTML = '<span class="zh">中</span> | <span class="en">En</span>';
        } else {
            sliderText.innerHTML = '<span class="zh">中</span> | <span class="en">En</span>';
        }
    }
    if (langToggle && sliderText) {
        langToggle.addEventListener('change', function() {
            setLang(langToggle.checked);
            syncLangSwitch();
        });
        // 页面加载时同步一次
        syncLangSwitch();
    }
    const _setLang = setLang;
    setLang = function(isEn) {
        _setLang(isEn);
        if (langToggle) langToggle.checked = !!isEn;
        syncLangSwitch();
    }
});

// 显示当前日期
function showCurrentDate() {
    const now = new Date();
    
    if (currentLang === 'en') {
        // 英文日期格式
        const englishMonths = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        
        const englishWeekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        // 获取日期后缀
        function getDaySuffix(day) {
            if (day >= 11 && day <= 13) return 'th';
            switch (day % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        }
        
        const month = englishMonths[now.getMonth()];
        const day = now.getDate();
        const daySuffix = getDaySuffix(day);
        const weekday = englishWeekdays[now.getDay()];
        
        const dateString = `${month} ${day}${daySuffix}, ${weekday}`;
        document.getElementById('dateDisplay').textContent = dateString;
    } else {
        // 中文日期格式
    const chineseMonths = [
        '一月', '二月', '三月', '四月', '五月', '六月',
        '七月', '八月', '九月', '十月', '十一月', '十二月'
    ];
    
    const chineseNumbers = [
        '', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十',
        '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
        '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十', '三十一'
    ];
    
    const chineseWeekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    
    const month = chineseMonths[now.getMonth()];
    const day = chineseNumbers[now.getDate()];
    const weekday = chineseWeekdays[now.getDay()];
    
    const dateString = `${month}${day}日 ${weekday}`;
    document.getElementById('dateDisplay').textContent = dateString;
    }
}

// 设置事件监听器
function setupEventListeners() {
    // 占位符点击事件
    if (placeholderText) placeholderText.addEventListener('click', startInput);
    
    // 输入框事件
    if (questionInput) {
        questionInput.addEventListener('input', updateButtonState);
        questionInput.addEventListener('blur', function() {
            if (!questionInput.value.trim() && !isHolding) {
                stopInput();
            }
        });
        questionInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (currentAnswer !== null) {
                    // 已有答案时，Enter直接进入新问题
                    if (!enterDown) {
                        enterDown = true;
                        isEnterHolding = true;
                        newQuestion();
                        // 修复：重置enterDown和isEnterHolding，保证下次Enter可用
                        enterDown = false;
                        isEnterHolding = false;
                    }
                    return;
                }
                if (!enterDown && questionInput.value.trim()) {
                    enterDown = true;
                    isEnterHolding = true;
                    startHolding();
                }
            }
        });
        questionInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter' && enterDown) {
                e.preventDefault();
                enterDown = false;
                isEnterHolding = false;
                if (currentAnswer === null) {
                    stopHolding();
                }
            }
        });
    }
    
    // 寻找答案按钮事件
    if (seekAnswerBtn) {
        seekAnswerBtn.addEventListener('mousedown', function(e) {
            if (seekAnswerBtn.disabled) {
                showGlobalToast(currentLang === 'en' ? 'Please enter content' : '未输入内容');
                e.preventDefault();
                return;
            }
            startHolding();
        });
        seekAnswerBtn.addEventListener('mouseup', function(e) {
            if (seekAnswerBtn.disabled) {
                e.preventDefault();
                return;
            }
            stopHolding();
        });
        seekAnswerBtn.addEventListener('mouseleave', function(e) {
            if (seekAnswerBtn.disabled) {
                e.preventDefault();
                return;
            }
            stopHolding();
        });
        seekAnswerBtn.addEventListener('touchstart', function(e) {
            if (seekAnswerBtn.disabled) {
                showGlobalToast(currentLang === 'en' ? 'Please enter content' : '未输入内容');
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            e.preventDefault(); // 防止默认行为
            e.stopPropagation();
            // Safari特殊处理：立即失焦输入框
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            if (isSafari) {
                questionInput.blur();
                questionInput.setAttribute('readonly', 'readonly');
            }
            startHolding();
        });
        seekAnswerBtn.addEventListener('touchend', function(e) {
            if (seekAnswerBtn.disabled) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            e.preventDefault(); // 防止默认行为
            e.stopPropagation();
            // Safari特殊处理：确保输入框不可交互
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            if (isSafari) {
                questionInput.blur();
                setTimeout(() => {
                    questionInput.removeAttribute('readonly');
                }, 300);
            }
            stopHolding();
        });
        seekAnswerBtn.addEventListener('touchcancel', function(e) {
            e.preventDefault(); // 防止默认行为
            e.stopPropagation();
            // Safari特殊处理：确保输入框不可交互
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            if (isSafari) {
                questionInput.blur();
                questionInput.removeAttribute('readonly');
            }
            stopHolding();
        });
    }
    
    // 保存和新问题按钮
    if (saveBtn) saveBtn.addEventListener('click', saveAnswer);
    if (newQuestionBtn) newQuestionBtn.addEventListener('click', newQuestion);
    
    // 历史记录相关
    if (historyBtn) historyBtn.addEventListener('click', showHistory);
    if (closeHistoryBtn) closeHistoryBtn.addEventListener('click', hideHistory);
}

// 开始输入
function startInput() {
    placeholderText.style.display = 'none';
    questionInput.style.display = 'block';
    questionInput.focus();
}

// 停止输入
function stopInput() {
    if (!questionInput.value.trim()) {
        placeholderText.style.display = 'block';
        questionInput.style.display = 'none';
        questionInput.value = '';
        setRandomPlaceholder();
    }
}

// 更新按钮状态
function updateButtonState() {
    const hasText = questionInput.value.trim().length > 0;
    seekAnswerBtn.disabled = !hasText;
}

// 开始长按
function startHolding() {
    if (!questionInput.value.trim()) {
        return;
    }
    // 移动端：长按时不聚焦输入框，避免键盘弹起
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 'ontouchstart' in window;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (!isMobile) {
        // 桌面端：保持输入框聚焦
    questionInput.focus();
    } else {
        // 移动端：主动失焦，隐藏键盘
        questionInput.blur();
        // Safari特殊处理：强制失焦并阻止默认行为
        if (isSafari) {
            questionInput.style.display = 'none';
            setTimeout(() => {
                questionInput.style.display = 'block';
            }, 100);
        }
    }
    // 每次开始前重置动画状态
    document.querySelector('.input-container').classList.remove('move-up');
    answerSection.classList.remove('show');
    answerSection.style.display = 'none';

    isHolding = true;
    holdStartTime = Date.now();
    seekAnswerBtn.classList.add('holding');
    seekAnswerBtn.querySelector('.btn-text').style.display = 'none';
    seekAnswerBtn.querySelector('.btn-loading').style.display = 'inline';

    // 动画：输入区上移，答案区渐显+上移
    document.querySelector('.input-container').classList.add('move-up');
    answerSection.style.display = 'block';
    answerSection.classList.add('show');

    // 顺序翻页
    let rollingIndex = 0;
    const currentAnswers = ANSWERS[currentLang];
    const total = currentAnswers.length;
    const interval = 600 / total; // 动态计算每一页的间隔，1秒一轮

    holdInterval = setInterval(() => {
        currentRollingAnswer = currentAnswers[rollingIndex];
        currentRollingIndex = rollingIndex;
        answerText.textContent = LANG[currentLang].seeking; // 只显示提示，不显示答案
        answerPage.textContent = `p${rollingIndex + 1}`;
        rollingIndex = (rollingIndex + 1) % total;
    }, interval);
}

// 停止长按
function stopHolding() {
    if (!isHolding) return;
    isHolding = false;
    seekAnswerBtn.classList.remove('holding');
    seekAnswerBtn.querySelector('.btn-text').style.display = 'inline';
    seekAnswerBtn.querySelector('.btn-loading').style.display = 'none';
    clearInterval(holdInterval);
    // 移动端：长按结束后不聚焦输入框，避免键盘弹起
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 'ontouchstart' in window;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (!isMobile) {
        // 桌面端：保持输入框聚焦
    questionInput.focus();
    } else {
        // 移动端：确保不聚焦，避免键盘弹起
        questionInput.blur();
        // Safari特殊处理：确保输入框不可交互
        if (isSafari) {
            questionInput.setAttribute('readonly', 'readonly');
            setTimeout(() => {
                questionInput.removeAttribute('readonly');
            }, 200);
        }
    }
    const holdDuration = Date.now() - (holdStartTime || 0);
    holdStartTime = null;
    if (holdDuration >= 1000) {
        generateAnswerFromRolling();
    } else {
        showGlobalToast(currentLang === 'en' ? 'Need to hold for more than 1 second' : '需长按大于1秒');
        // 只移除动画类，不直接隐藏display，保证下次动画重置
        document.querySelector('.input-container').classList.remove('move-up');
        answerSection.classList.remove('show');
        // 用requestAnimationFrame保证动画重置
        requestAnimationFrame(() => {
            answerSection.style.display = 'none';
        });
    }
}

// 生成答案
function generateAnswer() {
    const currentAnswers = ANSWERS[currentLang];
    const randomIndex = Math.floor(Math.random() * currentAnswers.length);
    currentAnswer = currentAnswers[randomIndex];
    currentAnswerIndex = randomIndex;
    
    answerText.textContent = currentAnswer;
    answerPage.textContent = `p${randomIndex + 1}`;
    answerSection.style.display = 'block';

    // 新增动画：输入区上移，答案区渐显+上移
    document.querySelector('.input-container').classList.add('move-up');
    answerSection.classList.add('show');

    // 隐藏寻找答案按钮，显示操作按钮
    if (seekAnswerBtn) seekAnswerBtn.style.display = 'none';
    if (actionButtons) actionButtons.style.display = 'flex';
    
    // 禁止再次输入
    if (questionInput) questionInput.readOnly = true;
}

// 生成答案
function generateAnswerFromRolling() {
    const currentAnswers = ANSWERS[currentLang];
    if (currentRollingAnswer == null) {
        // 兜底：如果没滚动过，随机一个
        const randomIndex = Math.floor(Math.random() * currentAnswers.length);
        currentRollingAnswer = currentAnswers[randomIndex];
        currentRollingIndex = randomIndex;
    }
    currentAnswer = currentRollingAnswer;
    currentAnswerIndex = currentRollingIndex;

    answerText.textContent = currentAnswer; // 松手后才显示答案
    answerPage.textContent = `p${currentAnswerIndex + 1}`;
    answerSection.style.display = 'block';

    // 新增动画：输入区上移，答案区渐显+上移
    document.querySelector('.input-container').classList.add('move-up');
    answerSection.classList.add('show');

    // 隐藏按钮，显示操作按钮
    if (seekAnswerBtn) seekAnswerBtn.style.display = 'none';
    if (actionButtons) actionButtons.style.display = 'flex';

    // 禁止再次输入
    if (questionInput) questionInput.readOnly = true;
}

// 显示全局toast
function showGlobalToast(message, options = {}) {
    // 彻底移除旧toast节点
    let oldToast = document.getElementById('globalToast');
    if (oldToast) {
        oldToast.parentNode.removeChild(oldToast);
    }

    // 创建新toast节点
    const toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'global-toast';

    // 左侧文字层
    const msgDiv = document.createElement('div');
    msgDiv.className = 'global-toast-message';
    // 判断是否为录入成功toast
    if (options && options.saveSuccess) {
        // SF符号风格 checkmark.circle.fill，颜色与文字一致，尺寸更小
        msgDiv.innerHTML = `<span style="display:inline-flex;align-items:center;margin-right:6px;vertical-align:middle;position:relative;top:-2px;">
            <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' style='display:block;'>
                <circle cx='8' cy='8' r='8' fill='#222'/>
                <path d='M5.2 8.2l2 2.1 3.5-3.5' stroke='#fff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>
            </svg>
        </span>` + message;
    } else {
        msgDiv.innerHTML = message;
    }
    toast.appendChild(msgDiv);

    // 右侧功能层
    const actionDiv = document.createElement('div');
    actionDiv.className = 'global-toast-action';
    if (options.undo) {
        const undoBtn = document.createElement('button');
        undoBtn.className = 'toast-undo';
        undoBtn.textContent = LANG[currentLang].undo;
        undoBtn.onclick = options.onUndo || function() {
            if (lastDeletedHistory) {
                history.unshift(lastDeletedHistory);
                localStorage.setItem('answerBookHistory', JSON.stringify(history));
                loadHistory();
                showGlobalToast(currentLang === 'en' ? 'Delete undone' : '已撤销删除');
                lastDeletedHistory = null;
            }
        };
        actionDiv.appendChild(undoBtn);
    }
    if (options.retry) {
        const retryBtn = document.createElement('button');
        retryBtn.className = 'toast-retry';
        retryBtn.textContent = '重试';
        retryBtn.onclick = options.onRetry || function(){};
        actionDiv.appendChild(retryBtn);
    }
    if (options.details) {
        const detailsBtn = document.createElement('button');
        detailsBtn.className = 'toast-details';
        detailsBtn.textContent = '详情';
        detailsBtn.onclick = options.onDetails || function(){};
        actionDiv.appendChild(detailsBtn);
    }
    // 只有不是录入成功toast时，才显示关闭按钮
    if (!options.undo && !options.retry && !options.details && !options.saveSuccess) {
        const closeBtn = document.createElement('button');
        closeBtn.className = 'toast-close';
        closeBtn.innerHTML = '✕';
        closeBtn.onclick = function() {
            toast.classList.remove('show');
            toast.classList.add('hide');
        };
        actionDiv.appendChild(closeBtn);
    }
    toast.appendChild(actionDiv);

    // 插入body
    document.body.appendChild(toast);

    // 强制reflow后加show，确保动画
    void toast.offsetWidth;
    toast.classList.add('show');

    // 自动消失
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
    }, options.duration || 2000);
}

// 收录成功提示定制
function getCustomSaveSuccess(answer, lang) {
    const count = history.length;
    if (lang === 'zh') {
        return `第<span class="orange">${count}</span>次收录「解忧册」`;
    } else {
        return `SolioBook Entry <span class="orange">#${count}</span> Saved`;
    }
}

// 保存答案
function saveAnswer() {
    if (!currentAnswer || !questionInput.value.trim()) return;
    
    const historyItem = {
        id: Date.now(),
        question: questionInput.value.trim(),
        answer: currentAnswer,
        page: currentAnswerIndex + 1,
        date: new Date().toLocaleDateString('zh-CN')
    };
    
    history.unshift(historyItem);
    if (history.length > 50) {
        history = history.slice(0, 50);
    }
    
    localStorage.setItem('answerBookHistory', JSON.stringify(history));
    loadHistory();
    showGlobalToast(getCustomSaveSuccess(currentAnswer, currentLang), { duration: 3000, saveSuccess: true });
    
    // 保存后进入新的输入状态
    newQuestion();
    // 恢复输入
    if (questionInput) questionInput.readOnly = false;
    setRandomPlaceholder();
    updateHistoryCount();
}

// 新的问题
function newQuestion() {
    questionInput.value = '';
    answerSection.style.display = 'none';
    currentAnswer = null;
    
    // 显示寻找答案按钮，隐藏操作按钮
    if (seekAnswerBtn) seekAnswerBtn.style.display = 'block';
    if (actionButtons) actionButtons.style.display = 'none';
    
    // 恢复占位符
    stopInput();
    updateButtonState();
    // 恢复输入
    if (questionInput) questionInput.readOnly = false;
    setRandomPlaceholder();
    // 新增：重置动画
    document.querySelector('.input-container').classList.remove('move-up');
    answerSection.classList.remove('show');
}

// 显示历史记录
function showHistory() {
    if (!historyPage || !mainContent) return;
    historyPage.style.display = 'flex';
    mainContent.style.pointerEvents = 'none';
    mainContent.style.userSelect = 'none';
    setTimeout(() => {
        historyPage.classList.add('show');
        historyPage.classList.remove('hide');
    }, 10);
}

// 隐藏历史记录
function hideHistory() {
    historyPage.classList.remove('show');
    historyPage.classList.add('hide');
    setTimeout(() => {
        historyPage.style.display = 'none';
        mainContent.style.pointerEvents = '';
        mainContent.style.userSelect = '';
    }, 450);
}

// 删除历史记录
function deleteHistory(id) {
    const idx = history.findIndex(item => item.id === id);
    if (idx !== -1) {
        lastDeletedHistory = history[idx];
        history.splice(idx, 1);
        localStorage.setItem('answerBookHistory', JSON.stringify(history));
        loadHistory();
        showGlobalToast(LANG[currentLang].deleteSuccess, {undo: true});
        updateHistoryCount();
    }
}

// 加载历史记录
function loadHistory() {
    if (!historyList) return;
    historyList.innerHTML = '';
    
    if (history.length === 0) {
        historyList.innerHTML = `
            <div class="empty-history">
                <img src="images/empty.svg" alt="暂无" class="empty-svg" />
                <div class="empty-text">暂无</div>
            </div>
        `;
        return;
    }
    
    // 按日期降序排列
    const sorted = [...history].sort((a, b) => parseDateToTimestamp(b.date) - parseDateToTimestamp(a.date));
    sorted.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <div class="history-question">${item.question}</div>
            <div class="history-answer">${item.answer}</div>
            <div class="history-bottom-row">
                <div class="history-date">${item.date} - p${item.page}</div>
                <button class="history-delete" onclick="deleteHistory(${item.id})" title="删除">
                    <img src="images/delete.png" alt="删除" style="width:24px;height:24px;vertical-align:middle; object-fit: contain;" />
                    <span class="delete-toast">删除</span>
                </button>
            </div>
        `;
        historyList.appendChild(historyItem);
    });
    updateHistoryCount();
}

// 切换历史记录操作菜单
function toggleHistoryActions(id) {
    const actions = document.getElementById(`actions-${id}`);
    const allActions = document.querySelectorAll('.history-actions');
    
    // 关闭其他打开的操作菜单
    allActions.forEach(action => {
        if (action !== actions) {
            action.classList.remove('show');
        }
    });
    
    // 切换当前操作菜单
    actions.classList.toggle('show');
}

// 弹窗确认导入
function showImportConfirm(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        let importData = [];
        let importType = '';
        if (file.name.endsWith('.csv')) {
            const lines = text.split(/\r?\n/).filter(Boolean);
            if (!lines[0].includes('问题') || !lines[0].includes('答案')) {
                showGlobalToast(currentLang === 'en' ? 'Unsupported CSV format' : '不支持的CSV格式');
                return;
            }
            for (let i = 1; i < lines.length; i++) {
                const m = lines[i].match(/^"(.*)","(.*)","(.*)",(\d+)$/);
                if (m) {
                    importData.push({
                        question: m[1].replace(/""/g,'"'),
                        answer: m[2].replace(/""/g,'"'),
                        date: m[3],
                        page: Number(m[4])
                    });
                }
            }
            importType = 'csv';
        } else if (file.name.endsWith('.json')) {
            try {
                const arr = JSON.parse(text);
                if (Array.isArray(arr) && arr[0] && arr[0].question && arr[0].answer) {
                    importData = arr;
                    importType = 'json';
                } else {
                    showGlobalToast(currentLang === 'en' ? 'Unsupported JSON format' : '不支持的JSON格式');
                    return;
                }
            } catch {
                showGlobalToast(currentLang === 'en' ? 'JSON file corrupted' : 'JSON文件损坏');
                return;
            }
        } else {
            showGlobalToast(currentLang === 'en' ? 'Only CSV or JSON format supported' : '仅支持CSV或JSON格式');
            return;
        }
        const localData = JSON.parse(localStorage.getItem('answerBookHistory') || '[]');
        // 生成预览HTML
        function previewList(data) {
            if (!data.length) return '<div style="color:#bbb;font-size:13px;text-align:left;">暂无</div>';
            return `<ul style='max-height:260px;overflow:auto;padding-left:0;text-align:left;'>${data.slice(0, 10).map((item, idx) => `<li style='margin-bottom:4px;text-align:left;list-style:none;'><span style='color:#999999;font-size:14px;margin-right:8px;'>${idx+1}.</span><b>${item.question}</b> <span style='color:#888;'>${item.answer}</span> <span style='color:#bbb;font-size:12px;'>${item.date||''}</span></li>`).join('')}</ul>${data.length > 10 ? `<div style='color:#bbb;font-size:12px;text-align:left;'>...共${data.length}条</div>` : ''}`;
        }
        // 说明内容
        const descs = {
            merge: LANG[currentLang].importDescMerge,
            cover: LANG[currentLang].importDescCover
        };
        // 预览内容
        function getPreview(mode) {
            if (mode === 'merge') {
                // 合并预览
                const map = new Map();
                [...importData, ...localData].forEach(item => {
                    const key = `${item.question}||${item.answer}||${item.date}`;
                    if (!map.has(key)) map.set(key, item);
                });
                const merged = Array.from(map.values());
                // 按日期降序排列
                merged.sort((a, b) => parseDateToTimestamp(b.date) - parseDateToTimestamp(a.date));
                return previewList(merged);
            } else {
                // 覆盖预览
                return previewList(importData);
            }
        }
        // 创建弹窗
        let modal = document.createElement('div');
        modal.className = 'import-modal';
        modal.innerHTML = `
            <div class=\"import-modal-content\" style=\"width:520px;height:700px;max-width:98vw;max-height:98vh;min-width:340px;min-height:340px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;border-radius:24px;\">\n                <div class=\"import-modal-title\" style=\"font-size:22px;font-weight:600;margin-bottom:32px;text-align:center;\">${LANG[currentLang].importTitle}</div>\n                <div style=\"font-size:16px;font-weight:500;color:#222;margin-bottom:18px;text-align:left;\">${LANG[currentLang].mergeMode}</div>\n                <div class=\"import-mode-row\" style=\"display:flex;flex-direction:row;gap:32px;justify-content:center;margin-bottom:24px;\">\n                    <div class=\"import-mode-btn import-mode-merge selected\" style=\"flex:1 1 0;min-width:0;padding:26px 0;border-radius:12px;border:1px solid #ff8c00;background:rgba(255,140,0,0.10);color:#ff8c00;cursor:pointer;font-size:18px;font-weight:600;display:flex;align-items:center;justify-content:center;transition:all 0.2s;\">${LANG[currentLang].merge}</div>\n                    <div class=\"import-mode-btn import-mode-cover\" style=\"flex:1 1 0;min-width:0;padding:26px 0;border-radius:12px;border:1px solid #ececec;background:#fff;color:#222;cursor:pointer;font-size:18px;font-weight:600;display:flex;align-items:center;justify-content:center;transition:all 0.2s;\">${LANG[currentLang].cover}</div>\n                </div>\n                <div class=\"import-mode-desc\" style=\"margin-bottom:4px;color:#666;font-size:15px;line-height:1.7;text-align:left;min-height:44px;display:flex;align-items:center;\">${descs.merge}</div>\n                <div style=\"height:1px;width:100%;background:#ececec;margin:8px 0 18px 0;\"></div>\n                <div class=\"import-mode-preview\" style=\"margin-bottom:28px;flex:1 1 0;overflow:auto;display:flex;flex-direction:column;align-items:stretch;\">\n                    <div style=\"font-size:15px;font-weight:500;color:#222;margin-bottom:12px;text-align:left;\">${LANG[currentLang].preview}</div>\n                    <div class=\"import-preview-list\" style=\"text-align:left;\">${getPreview('merge')}</div>\n                </div>\n                <div class=\"import-modal-actions\" style=\"display:flex;flex-direction:row;gap:24px;justify-content:center;margin-top:auto;\">\n                    <button class=\"import-cancel\" style=\"flex:1 1 0;background:#f5f5f5;color:#888;border:none;border-radius:10px;font-size:17px;font-weight:500;padding:16px 0;cursor:pointer;transition:background 0.2s;\">${LANG[currentLang].cancel}</button>\n                    <button class=\"import-confirm\" style=\"flex:1 1 0;background:linear-gradient(135deg,#ff8c00 0%,#ff6b35 100%);color:#fff;border:none;border-radius:10px;font-size:17px;font-weight:600;padding:16px 0;cursor:pointer;transition:background 0.2s;\">${LANG[currentLang].importBtn}</button>\n                </div>\n            </div>\n        `;
        document.body.appendChild(modal);
        // 支持点击空白处关闭弹窗
        modal.addEventListener('mousedown', function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
        // 交互逻辑
        let mode = 'merge';
        const mergeBtn = modal.querySelector('.import-mode-merge');
        const coverBtn = modal.querySelector('.import-mode-cover');
        const descDiv = modal.querySelector('.import-mode-desc');
        const previewDiv = modal.querySelector('.import-preview-list');
        mergeBtn.onclick = function() {
            if (mode === 'merge') return;
            mode = 'merge';
            mergeBtn.classList.add('selected');
            mergeBtn.style.background = 'rgba(255,140,0,0.10)';
            mergeBtn.style.color = '#ff8c00';
            mergeBtn.style.borderColor = '#ff8c00';
            mergeBtn.style.boxShadow = '0 2px 8px rgba(255,140,0,0.08)';
            coverBtn.classList.remove('selected');
            coverBtn.style.background = '#fff';
            coverBtn.style.color = '#222';
            coverBtn.style.borderColor = '#ececec';
            coverBtn.style.boxShadow = 'none';
            descDiv.innerHTML = descs.merge;
            previewDiv.innerHTML = getPreview('merge');
        };
        coverBtn.onclick = function() {
            if (mode === 'cover') return;
            mode = 'cover';
            coverBtn.classList.add('selected');
            coverBtn.style.background = 'rgba(255,140,0,0.10)';
            coverBtn.style.color = '#ff8c00';
            coverBtn.style.borderColor = '#ff8c00';
            coverBtn.style.boxShadow = '0 2px 8px rgba(255,140,0,0.08)';
            mergeBtn.classList.remove('selected');
            mergeBtn.style.background = '#fff';
            mergeBtn.style.color = '#222';
            mergeBtn.style.borderColor = '#ececec';
            mergeBtn.style.boxShadow = 'none';
            descDiv.innerHTML = descs.cover;
            previewDiv.innerHTML = getPreview('cover');
        };
        // 初始选中态
        mergeBtn.style.background = 'rgba(255,140,0,0.10)';
        mergeBtn.style.color = '#ff8c00';
        mergeBtn.style.borderColor = '#ff8c00';
        mergeBtn.style.boxShadow = '0 2px 8px rgba(255,140,0,0.08)';
        coverBtn.style.background = '#fff';
        coverBtn.style.color = '#222';
        coverBtn.style.borderColor = '#ececec';
        coverBtn.style.boxShadow = 'none';
        // 按钮
        modal.querySelector('.import-cancel').onclick = () => document.body.removeChild(modal);
        modal.querySelector('.import-confirm').onclick = () => {
            document.body.removeChild(modal);
            doImportHistory(file, mode, importData);
        };
    };
    reader.readAsText(file);
}

// 实际导入逻辑，mode为'merge'或'cover'
function doImportHistory(file, mode, importData) {
    let data = importData;
    if (mode === 'merge') {
        const localData = JSON.parse(localStorage.getItem('answerBookHistory') || '[]');
        // 合并并去重（按"问题+答案+日期"唯一）
        const map = new Map();
        [...importData, ...localData].forEach(item => {
            const key = `${item.question}||${item.answer}||${item.date}`;
            if (!map.has(key)) {
                map.set(key, item);
            }
        });
        data = Array.from(map.values());
        // 按日期降序排列（最近的在最上面）
        data.sort((a, b) => parseDateToTimestamp(b.date) - parseDateToTimestamp(a.date));
    }
    // 覆盖直接用importData
    localStorage.setItem('answerBookHistory', JSON.stringify(data));
    loadHistory();
    showGlobalToast(mode === 'merge' ? 
        (currentLang === 'en' ? 'History merged successfully' : '历史合并导入成功') : 
        (currentLang === 'en' ? 'History overwritten successfully' : '历史覆盖导入成功'));
    updateHistoryCount();
}

// 在初始化和每次历史变动时更新历史条数
function updateHistoryCount() {
    const countSpan = document.getElementById('historyCount');
    if (countSpan) {
        const historyArr = JSON.parse(localStorage.getItem('answerBookHistory') || '[]');
        countSpan.textContent = historyArr.length;
    }
}
 