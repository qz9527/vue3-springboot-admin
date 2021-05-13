import enLocale from 'element-plus/lib/locale/lang/en'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
// import localeZH from 'element-plus/lib/locale/lang/zh-cn'
// import localeEN from 'element-plus/lib/locale/lang/en'
export default {
    [enLocale.name]: {
        // el 这个属性很关键，一定要保证有这个属性，
        el: enLocale.el,
        // 定义您自己的字典，但是请不要和 `el` 重复，这样会导致 ElementPlus 内部组件的翻译失效.
        i18n: {
            route: {
                about: "about",
                book: "book",
                i18n: "international",
                BookCreate: "BookCreate",
                BookList: "BookList"
            },
            breadcrumb: 'International Products',
            tips: 'Click on the button to change the current language. ',
            btn: 'Switch Chinese',
            title1: 'Common usage',
            p1: "If you reveal your secrets to the wind you should not blame the wind for  revealing them to the trees.",
            p2: "Nothing can help us endure dark times better than our faith. ",
            p3: "If you can do what you do best and be happy, you're further along in life  than most people."
        }
    },
    [zhLocale.name]: {
        el: zhLocale.el,
        // 定义您自己的字典，但是请不要和 `el` 重复，这样会导致 ElementPlus 内部组件的翻译失效.
        i18n: {
            route: {
                about: "首页",
                book: "书籍管理",
                BookCreate: "创建书籍",
                BookList: "图书列表",
                i18n: "国际化"
            },
            breadcrumb: '国际化产品',
            tips: '通过切换语言按钮，来改变当前内容的语言。',
            btn: '切换英文',
            title1: '常用用法',
            p1: '要是你把你的秘密告诉了风，那就别怪风把它带给树。',
            p2: '没有什么比信念更能支撑我们度过艰难的时光了。',
            p3: '只要能把自己的事做好，并让自己快乐，你就领先于大多数人了。'
        }
    },
    // 'zh-cn': {
    //     el: {},
    //     i18n: {
    //         route: {
    //             about: "首页",
    //             book: "书籍管理",
    //             BookCreate: "创建书籍",
    //             BookList: "图书列表",
    //             i18n: "国际化"
    //         },
    //         breadcrumb: '国际化产品',
    //         tips: '通过切换语言按钮，来改变当前内容的语言。',
    //         btn: '切换英文',
    //         title1: '常用用法',
    //         p1: '要是你把你的秘密告诉了风，那就别怪风把它带给树。',
    //         p2: '没有什么比信念更能支撑我们度过艰难的时光了。',
    //         p3: '只要能把自己的事做好，并让自己快乐，你就领先于大多数人了。'
    //     }
    // },
    // 'en': {
    //     el: {},
    //     i18n: {
    //         route: {
    //             about: "about",
    //             book: "book",
    //             i18n: "international",
    //             BookCreate: "BookCreate",
    //             BookList: "BookList"
    //         },
    //         breadcrumb: 'International Products',
    //         tips: 'Click on the button to change the current language. ',
    //         btn: 'Switch Chinese',
    //         title1: 'Common usage',
    //         p1: "If you reveal your secrets to the wind you should not blame the wind for  revealing them to the trees.",
    //         p2: "Nothing can help us endure dark times better than our faith. ",
    //         p3: "If you can do what you do best and be happy, you're further along in life  than most people."
    //     }
    // }
}