<template>
	<div class="register">
		<form >
			<div class="form-group">
				<input type="text" placeholder="输入手机号/邮箱" class="form-control"/>
				<div class="input-bg"></div>
			</div>
			<div class="form-group">
				<input type="password" placeholder="输入密码/验证码" class="form-control"/>
				<div class="input-bg"></div>
			</div>
			
			<button class="submit">登录</button>
		</form>
		
	</div>
</template>

<script>
</script>

<style scoped>
.register{
	position: absolute;
	top:0;
	left:0;
	background:#f6f6f6;
	width:100%;
	min-height: 100%;
}
.register form{
	margin-top:50px;
	padding:10px 31px 0px 31px;
}
.form-control{
	border: none;
    background:#f6f6f6;
    border-radius: 0px;
    box-shadow: none;
    outline: none;
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
}
.form-group{
	margin-top: 30px; 
    position: relative;
}
.input-bg{
	position: absolute;
    top: 20px;
    height: 12px;
    width: 100%;
    border: solid #c4c4c4;
    border-width: 0 1px 1px 1px;
    box-sizing: border-box;
}
.submit{
	width: 163px;
    background-color: #fe8233;
    color: #fff;
    border: none;
    border-radius: 36px;   
    padding: 8px 12px;
    font-size: 15px;
    outline: none;
    margin:45px auto;
    display: block;     
}
</style>