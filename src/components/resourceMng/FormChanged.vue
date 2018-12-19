<template>
	<div id="FormChanged">
					<el-row>
								<el-button type="primary" size="small" icon="el-icon-circle-plus" @click="modal12 = true">新增</el-button>
								<el-button type="primary" size="small" icon="el-icon-edit" @click="modal13 = true" :disabled="isEdit">编辑</el-button>
								<el-button type="primary" size="small" icon="el-icon-delete" :disabled="isEdit">删除</el-button>
								
					</el-row>
					<Modal v-model="modal12" draggable scrollable title="Modal 1">
						<div>
									<AddForm></AddForm>

						</div>
					</Modal>
					<Modal v-model="modal13" draggable scrollable title="Modal 2">
						<div>
						   	<EditForm></EditForm>
						</div>
					</Modal>
	</div>
</template>
<script>
	import AddForm from '../resourceMng/AddForm'
	import EditForm from '../resourceMng/EditForm'
	export default {
		name:"FormChanged",
		data() {
			return {
				modal12: false,
				modal13: false
			}
		},
		components:{
					AddForm,EditForm
		},
		computed:{
			isEdit(){
				return this.$store.state.isEdit;
			}
		}
	}
</script>