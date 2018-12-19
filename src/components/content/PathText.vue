<template>
			<div id="PathText">{{childName}}
			</div>
</template>

<script>
			export default {
				name:"PathText",
				computed:{
				
					childName(){
						return this.$store.state.childName;
					}
				}
			} 
</script>

<style>
			#PathText{width:100%;height:30px;background: #CCCCCC;text-align: left;line-height: 30px;border:1px solid #f9f9f9;}
</style>