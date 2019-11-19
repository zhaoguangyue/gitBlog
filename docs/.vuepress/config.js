module.exports = {
    title: 'Hello',
    description: 'test',
    head: [
        ['link', { rel: 'stylesheet', href: "https://cdn.bootcss.com/animate.css/3.7.2/animate.css"}]
    ],
    markdown: {
        lineNumbers: true
    },
    host: '0.0.0.0',
    port: "8080",
    dest: ".vuepress/dist", //构建目录
    contentLoading: true, //是否对异步加载页面的内容开启占位符加载。如果它是一个字符串，那么它应该是自定义加载组件的名称。
    themeConfig: {
        logo: '/test.jpg',
        //顶部导航栏
        nav: [           
            //格式一：直接跳转，'/'为不添加路由，跳转至首页
            { text: '首页', link: '/' },    
            
            //格式二：添加下拉菜单，link指向的文件路径
            {
                text: '分类',  //默认显示        
                ariaLabel: '分类',   //用于识别的label
                items: [
                    { text: '文章', link: '/pages/react/react.md' },  
                    //点击标签会跳转至link的markdown文件生成的页面
                    { text: '琐碎', link: '/pages/react/react-hock.md' },
                ]
            },
            { text: '功能演示', link: '/pages/vue/vue入门.md' },
            
            //格式三：跳转至外部网页，需http/https前缀
            { text: 'Github', link: 'https://github.com/dwanda' },
        ],
        
        //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
        sidebar: {
            '/pages/react/':[         
                {
                    title: '测试菜单1',   // 一级菜单名称
                    collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                    sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                    children: [
                        ['react-hock.md', '子菜单1'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
                        ['react.md', '子菜单2']
                    ]
                },
                {
                    title: '测试菜单2',
                    collapsable: false, 
                    children: [
                        ['react.md', '子菜单1']
                    ]
                }
            ],
            
            //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
        }
    },
}