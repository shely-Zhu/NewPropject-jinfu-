<!--
    页面title模板
    title: 标题名称
    rankNum:右侧排名图标和文字显示，不传，不显示右侧图标
 -->
<template>
    <div id='pageTitle' class="pageTitle">
        <div class="pTitle" ref="pTitle">
            <span class="iconfont back" @click="back" htmdEvt='back_btn'>&#xe605;</span>
            <h2 class="title">{{title}}</h2>
        </div>
    </div>
</template>
<script>
export default {
    name: 'pageTitle',
    props: {
        title: { //调整暂无数据图片的位置
            type: String,
        },
        backUrl:{ //返回按钮地址
            type: String,
            default: '-1'
        },
        backParams:{ //返回按钮传参
            type: Object,
            default () {
                return {}
            }
        }
    },
    data() {
        return {
        }
    },
    // mounted(){
    //     //设置pageTitle的高度
    //     debugger;
    //     this.$refs.pgTitle.style.height = this.$refs.pTitle.style.height;
    // },
    methods: {
        back(){
            /*
            * 会出现的情况：其他应用跳转任务管理详情页，点击返回要关闭详情页面
            * 处理：在详情页获取URL信息，获取isSkip字段信息，有的话说明是其他应用跳转过来的，点击返回按钮时调用closePage原生方法
            *       没有的话说明就是任务管理内部自己跳转
            *       其他页面没有设置isSkip参数，应该是不存在，排除对其他页面的影响
            * */
           console.log(this.backParams,'backParams')
           if(this.backUrl == 'close'){ //关闭页面
               window.jsObj.colsePage();
           }else if(this.backUrl == '-1'){ //返回上一级
               this.$router.go(-1);
           }else if(this.backUrl){ //返回指定路径，传指定的参数
               this.$router.push({path:this.backUrl, query:this.backParams})
           }
            // let isSkip = sessionStorage.getItem('isSkip');
            // let SelectTab = sessionStorage.getItem('SelectTab')
            // console.log('isSkip==' + isSkip);
            // if (isSkip == 'NO' || !isSkip) {
            //     if(this.title == '任务管理'){

            //     }if(SelectTab == 1 || SelectTab == 2 && this.title == '任务详情'){
            //         this.$router.push({path:'/', query:{SelectTab: SelectTab}})
            //     }else{

            //     }
            // } else if (isSkip == 'YES') {
            //     window.jsObj.colsePage();
            // } else {

            // }
        }
    },
};

</script>

<style lang="scss">

.pageTitle {
    position: fixed;
    /*position: relative;*/
    height: 2.2rem;
    z-index: 999;
    .pTitle{
        // padding: 0.8rem 0.6rem;
        color: rgb(51, 51, 51);
        font-size: .8rem;
        word-break: break-all;
        position: fixed;
        top: 0;
        width: 100%;
        left: 0;
        z-index: 100;
        background-color: #fff;
        height: 2.2rem;
        line-height: 2.2rem;
        border-bottom: 0.5px solid #ddd;
    }

    .back{
        font-size: 100%;
        position: absolute;
        left: 0.6rem;
    }

    .title{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 86%;
        margin-left: auto;
        margin-right: auto;
        font-weight: 600;
        font-size: .85rem;
        text-align: center;
    }

    // &:before {
    //     content: '';
    //     display: inline-block;
    //     width: .2rem;
    //     height: .65rem;
    //     background: rgb(255, 107, 0);
    //     position: absolute;
    //     top: 1rem;
    //     left: 0rem;
    // }

    // .pth2 {
    //     white-space: nowrap;
    //     overflow: hidden;
    //     text-overflow: ellipsis;
    // }

    // .pt87 {
    //     width: 86%;
    // }

    .ptIcon {
        position: absolute;
        width: 13%;
        top: 0.3rem;
        right: 0.6rem;
        text-align: center;

        .ptrank {
            display: inline-block;
            font-size: 0.5rem;
            color: #666;
        }

        .ptSvg {
            width: 1.1rem;
            height: 1rem;

        }

    }

}

</style>
