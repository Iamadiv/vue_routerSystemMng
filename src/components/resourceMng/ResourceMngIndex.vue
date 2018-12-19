<template>
	<div id="resourceMng">
		<div class="layout">
			<Layout class="LayoutSider">
				<Sider class="Sider_Tree">
					<Tree></Tree>
				</Sider>
				<Layout>
					<Header class="layout-header-bar">
						<FormChanged></FormChanged>
					</Header>
					<Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
						<tablelist></tablelist>
					</Content>

				</Layout>
			</Layout>
		</div>
	</div>
</template>

<script>
	import Tree from '../resourceMng/Tree'
	import tablelist from '../resourceMng/TableList'
	import FormChanged from '../resourceMng/FormChanged'
	export default {
		name: "ResourceMng",
		data() {
			return {
				isCollapsed: false,
			};
		},
		computed: {
			menuitemClasses: function() {
				return [
					'menu-item',
					this.isCollapsed ? 'collapsed-menu' : ''
				]
			}
		},
		components: {
			Tree,
			tablelist,
			FormChanged
		}
	}
</script>

<style scoped="scoped">
	#resourceMng {
		width: 100%;
		height: 480px;
	}
	
	.layout {
		border: 1px solid #d7dde4;
		background: #f5f7f9;
		position: relative;
		border-radius: 4px;
		overflow: hidden;
		height: 480px;
	}
	
	.LayoutSider {
		height: 480px;
	}
	
	.layout-header-bar {
		height: 50px;
		line-height: 50px;
		background: aliceblue;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
		text-align: right;
		padding-right: 10px;
	}
	
	.menu-item span {
		display: inline-block;
		overflow: hidden;
		width: 69px;
		text-overflow: ellipsis;
		white-space: nowrap;
		vertical-align: bottom;
		transition: width .2s ease .2s;
	}
	
	.menu-item i {
		transform: translateX(0px);
		transition: font-size .2s ease, transform .2s ease;
		vertical-align: middle;
		font-size: 16px;
	}
	
	.collapsed-menu span {
		width: 0px;
		transition: width .2s ease;
	}
	
	.collapsed-menu i {
		transform: translateX(5px);
		transition: font-size .2s ease .2s, transform .2s ease .2s;
		vertical-align: middle;
		font-size: 22px;
	}
	
	.Sider_Tree {
		background: #FFFFFF;
		border: 1px solid #d8d3d3;
	}
</style>