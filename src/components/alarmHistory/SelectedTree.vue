<template>
	<div id="SelectedTree">
		<el-tree :data="data2" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current :props="defaultProps">
		</el-tree>
		
			
	</div>
</template>
<script>
	export default {
		name: "SelectedTree",
		methods: {
						getCheckedNodes() {
							var arr = this.$refs.tree.getCheckedNodes();
			    var str = '';
			    for (var i = 0 ;i < arr.length; i++) {
			       str += arr[i].id+",";
			    }
			    this.$store.commit('commitID',str.substr(0,str.length-1));	
			    console.log(str);
						 console.log(str.substr(0,str.length-1));
				//console.log(this.$refs.tree.getCheckedNodes());
			},
			getCheckedKeys() {
				console.log(this.$refs.tree.getCheckedKeys());
			},
			setCheckedNodes() {
				this.$refs.tree.setCheckedNodes([{
					id: 5,
					label: '二级 2-1'
				}, {
					id: 9,
					label: '三级 1-1-1'
				}]);
			},
			setCheckedKeys() {
				this.$refs.tree.setCheckedKeys([3]);
			},
			resetChecked() {
				this.$refs.tree.setCheckedKeys([]);
			}
		},

		data() {
			return {
				data2: [
				{
						id: 1,
						label: '一级 1',
						children: [{
							id: 4,
							label: '二级 1-1',
							children: [{
								id: 9,
								label: '三级 1-1-1'
							}, {
								id: 10,
								label: '三级 1-1-2'
							}]
						}]
					},
					{
						id: 2,
						label: '一级 2',
						children: [{
							id: 5,
							label: '二级 2-1'
						}, {
							id: 6,
							label: '二级 2-2'
						}]
					}, {
						id: 3,
						label: '一级 3',
						children: [{
							id: 7,
							label: '二级 3-1'
						}, {
							id: 8,
							label: '二级 3-2'
						}]
					}
				],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			};
		}
	};
</script>

<style>
	#SelectedTree {
		width: 300px;
	}
</style>