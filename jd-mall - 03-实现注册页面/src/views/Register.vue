<template>
  <div>
    <cube-form
      :model="model"
      :schema="schema"
      @submit="submitHandler">
    </cube-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      model:{
        username:'',
        password:'',
      },
      schema:{
        fields:[
          // 登录用户名配置
          {
          type:'input',
          modelKey:'username',
          label:'用户名',
          props:{
            placeholder:'请输入用户名',
          },
          rules:{
            required:true,    // 检验规则
            type:'string',    // 类型
            min:'3',    // 最小值
            max:'15',    // 最大值
          },
          trigger:'blur',
          messages:{
            required:'用户名不能为空',
            min:'用户名不能小于3个字符',
            max:'用户名不能大于15字符',
          }
        },
        // 用户密码配置
        {
          type:'input',
          modelKey:'password',
          label:'密码',
          props:{
            placeholder:'请输入密码',
            type:'password',
            eye:{
              open:false,
            }
          },
          rules:{
            required:true,    // 检验规则
          },
          trigger:'blur',
          messages:{
            required:'密码不能为空',
          }
        },
        {
          type:'submit',
          label:'注册',
        }]
      },
    }
  },
  methods:{
    submitHandler(e){
      // 阻止默认提交,阻止冒泡
      e.preventDefault();

      console.log('注册');
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>



