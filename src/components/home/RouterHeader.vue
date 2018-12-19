<template>
			<div id="Header">
							{{HeaderText}}
			</div>
</template>

<script>
				export default {
							name:"RouterHeader",
							data(){
										return {
											HeaderText:"Header"
										}
										
							}
				}
</script>

<style>
					#Header{
				width:100%;height:50px;background: #515A6E;line-height: 50px;text-align: center;color:orange;font-size: 20px;
			}
</style>