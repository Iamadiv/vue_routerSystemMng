<template>
	<div id="Tree">
		<el-tree :data="data" :props="defaultProps":default-expand-all="false" :highlight-current="true"
			accordion @node-click="handleNodeClick"></el-tree>
	</div>
</template>
<script>
	export default {
		name: "Tree",
		data() {
			return {
				data: [{
						label: '无线路由网络管理系统1',
						type:'systemModel',
						id:'111',
						children: [{
							label: '路由器1',
							type:'routerModel',
							id:'112',
							children: [{
									label: '链路1',
									type:'linkModel',
									id:'113',
								},
								{
									label: '链路2',
									type:'linkModel',
									id:'114',
								},

							],
						}]
					},
					{
						label: '无线路由网络管理系统2',
						type:'systemModel',
						children: [{
								label: '路由器2',
								type:'routerModel',
								id:'115',
								children: [
								{
										label: '链路1',
										type:'linkModel',
										id:'116',
									},
									{
										label: '链路2',
										type:'linkModel',
										id:'117',
									},
								]
						}]
				},
				{
					label: '无线路由网络管理系统3',
					type:'systemModel',
					id:'118',
					children: [
					{
						label: '路由器3-1',
						type:'routerModel',
						id:'119',
						children: [
								{
									label: '链路1',
									type:'linkModel',
									id:'210',
								},
								{
									label: '链路2',
									type:'linkModel',
									id:'211',
								},
						]
					
					},
					{
						label: '路由器3-2',
						type:'routerModel',
						id:'213',
						children: [
							{
								label: '链路1',
								type:'linkModel',
								id:'214',
							},
							{
								label: '链路2',
								type:'linkModel',
								id:'215',
							},
						]
					}]
				}],
			defaultProps: {
				children: 'children',
				label: 'label'
			}
		};
	},
	methods: {
		handleNodeClick(data) {
			//console.log(data);
		}
	}
	};
</script>

<style scoped>
	#Tree {
		background:salmon;
		line-height: 22px;
		text-align: left;
	
	}
</style>