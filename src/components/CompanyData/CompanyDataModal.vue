<template>
    <div class="company-data-modal modal" v-if="showModal">
        <div class="modal-container">
            <div class="modal-close" @click="$emit('close')">
                <img src="src/images/close.png" alt="modal-close">
            </div>

            <div class="modal-content">
                <div class="form-group">
                    <div class="mb-25">
                        <label class="form-label">Additional Notes</label>
                    </div>
                    <textarea 
                        v-model="addNotes"
                        class="form-textarea"
                        name="notes" 
                        placeholder="e.g. Good Tech Company"
                    />
                </div>
            </div>

            <div class="modal-footer">
                <div class="form-group mt-25 mb-25">
                    <div class="button button-primary button-sm" @click="$emit('sendNotes', addNotes)">Save</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            addNotes: null
        }),

        props: {
            showModal: {
                type: Boolean
            }
        },
    }
</script>