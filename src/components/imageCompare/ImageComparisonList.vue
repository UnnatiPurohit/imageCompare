<template>
<div>
    <div class="container card mb-4" >
        <div class="row">
            <div class="col-sm" v-for="{id ,title , url , thumbnailUrl} of categoryArray" :key="id">
                <div class="card mb-4" style="width: 18rem;">
                    <img class="card-img-top" :src="url" alt="Card image cap">
                    <div class="card-body" >
                        <h5 class="card-title">{{title}}</h5>
                        <h5 class="card-title">{{id}}</h5>
                        <p class="card-text">{{thumbnailUrl}}</p>
                        <Button :id="`compare_${id}`" @click="compare(id , title , url , thumbnailUrl) || showSuccess()" class="btn btn-success mr-1"><i class="pi pi-plus"> Compare</i></Button>
                        <Button :id="`remove_${id}`" @click="remove(id)" class="btn btn-danger" style="display: none;"><i class="pi pi-trash"> Remove</i></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container card mt-5 mb-2">
        <DataTable class="mt-3" :value="arrayStore" dataKey="id" showGridlines responsiveLayout="scroll">
            <template #header="">
                <h5 class="text-center">Comparison Table</h5>
            </template>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="slotProps.data.thumbnailUrl" :alt="slotProps.data.id" class="product-image" />
                </template>
            </Column>
            <Column field="id" header="ID"></Column>
            <Column field="url" header="URL"></Column>
            <Column field="title" header="Title"> </Column>
        </DataTable>
    </div>
    <Toast />
</div>
</template>

<script>
import Toast from 'primevue/toast';
import {
    imageView
} from "@/api/ImageComparisonApi.js";
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
export default {
    components: {
        DataTable,
        Column,
        Toast,
        Button
    },
    data() {
        return {
            arrayStore: [],
            categoryArray: [],
        }
    },
    methods: {
        remove(id) {
              document.getElementById('compare_'+id).style.display = 'block';
             document.getElementById('remove_'+id).style.display = 'none';
            if (id == this.arrayStore[0].id) {
                this.arrayStore.pop(id);
                this.$toast.add({
                    severity: 'success',
                    summary: 'Data Deleted successfully',
                    life: 3000
                });
            } else {
                this.$toast.add({
                    severity: 'error',
                    summary: 'Data Not Found',
                    life: 3000
                });
            }
        },
        showSuccess() {
            this.$toast.add({
                severity: 'success',
                summary: 'Data Added Successfully',
                life: 3000
            });
        },
        compare(id, title, url , thumbnailUrl) {
            let obj = {};
            obj.id = id;
            obj.title = title;
            obj.url = url;
            obj.thumbnailUrl = thumbnailUrl;

            this.arrayStore.push(obj);
            
             document.getElementById('compare_'+id).style.display = 'none';
             document.getElementById('remove_'+id).style.display = 'block';
 

        },
        imageCompare() {
            imageView().then((response) => {
                this.categoryArray = response
            })
        }

    },
    mounted() {
        this.imageCompare()
    }
}
</script>

<style>
.card-img-top {
    height: 150px;
    width: 286px;
}
</style>
