export interface IFMenuBase {
    key: string;
    title: string;
    icon?: string;
    selectIcon?: string;
    component?: string;
   
}



const menus: {
    menus: IFMenuBase[];
    [index: string]: any;
} = {
    menus: [
        // 菜单相关路由
        { key: '/', title: '数据统计', icon: 'menuIcon1',selectIcon:'selectdata', component: 'Home' },
        { key: '/farms1', title: '废币兑换', icon: 'menuIcon2',selectIcon:'selectdata', component: 'Farm' },
        { key: '/farms', title: '流动性挖矿', icon: 'menuIcon3',selectIcon:'selectdata', component: 'Farm' },
        { key: '/TailOrder', title: '尾单博弈', icon: 'menuIcon4',selectIcon:'selectdata', component: 'TailOrder' },
        { key: '/Extension', title: '推广返佣', icon: 'menuIcon5',selectIcon:'selectdata', component: 'Extension' },
        { key: '/farms4', title: '规则说明', icon: 'menuIcon6',selectIcon:'selectdata', component: 'Farm' },
        
    ],
    others: [], // 非菜单相关路由

};

export default menus;
