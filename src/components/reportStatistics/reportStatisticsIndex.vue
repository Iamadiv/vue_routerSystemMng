<template>

	<div id="ReportStatistics" class="demo-split">
		<Split v-model="split1">
			<div slot="left" class="demo-split-pane">
				<Tree></Tree>
			</div>
			<div slot="right" class="demo-split-pane">
				Right Pane
			</div>
		</Split>
	</div>

</template>

<script>
	import Tree from '../resourceMng/Tree'
	export default {
			name: "ReportStatistics",
			data() {
				return {
					split1: 0.5
				}
			},
			components:{
					Tree
			}
	}
</script>

<style scoped="scoped">
	.demo-split {
		height: 480px;
		border: 1px solid #dcdee2;
	}
	
	.demo-split-pane {
		padding: 10px;
	}
</style>