Vue.component('todo-item',{
    props:['content','index'],
    template:'<li @click="handubmit">{{content}}</li>',//模板
    methods:{
        handubmit:()=>{
            this.$emit('delete',this.index)
        }
    }
})
let vue2=new Vue({
    el:'#root',
    data:{
        inputValue:'hello',
        list:[
        //     {text:"语文",id:0},
        //     {text:"数学",id:1},
        //     {text:"英语",id:2}
         ]
    },
    methods:{
        handSubmit:function(){
            this.list.push(this.inputValue);
            this.inputValue='';
        },
        handDelete:function (index){
            this.list.splice(index,1);
        }
    }
})
