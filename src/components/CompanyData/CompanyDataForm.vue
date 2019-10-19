<template>
    <form 
        class="company-data-form form mt-25"
        method="post"
    >
        <div 
            class="form-group" 
            v-bind:class="{ 'form-error': company_name_error }"
        >
            <label class="form-label">Company name</label>
            <input 
                class="form-input" 
                type="text"
                v-model="company_name"
                name="company_name" 
                placeholder="e.g. Your Company Name"
                @blur="validateName"
            >
        </div>
        <div 
            class="form-group" 
            v-bind:class="{ 'form-error': company_spend_error }"
        >
            <label class="form-label">Company spend</label>
            <input 
                class="form-input" 
                type="text" 
                v-model="company_spend"
                name="company_spend" 
                placeholder="e.g. $150,000" 
                @blur="validateSpend"
                @keypress="isNumber($event)"
            >
        </div>
        <div 
            class="form-group" 
            v-bind:class="{ 'form-error': company_spend_ability_error }"
        >
            <label class="form-label">Company spend ability</label>
            <input 
                class="form-input" 
                type="text"
                v-model="company_spend_ability" 
                name="company_spend_ability" 
                placeholder="e.g. $150,000 - $330,000"
                @blur="validateSpendAbility"
                @keypress="isNumber($event)"
            >
        </div>
        <div 
            class="form-group" 
        >
            <label class="form-label">Notes</label>
            <textarea 
                class="form-textarea"
                v-model="notes" 
                name="notes" 
                placeholder="e.g. Good Tech Company"
                v-on:click="openModal"
            />
        </div>
        <CompanyDataModal :showModal="showModal" @close="showModal = false" @sendNotes="mergeNotes"/>
    </form>
</template>

<script>
    import CompanyDataModal from './CompanyDataModal.vue';

    export default {
        data: () => ({
            company_name: null,
            company_spend: null,
            company_spend_ability: null,
            notes: null,
            company_name_error: false,
            company_spend_error: false,
            company_spend_ability_error: false,
            showModal: false
        }),

        methods: {
            validateName: function(e) {
                var has_error = false;

                (!this.company_name) ? has_error = true : has_error = false;
                this.company_name_error = has_error;
            },

            validateSpend: function(e) {
                var has_error = false;
                var value = (this.company_spend);

                if (value <= 0) {
                    has_error = true;
                } else {
                    this.company_spend = this.formatPrice(this.company_spend.replace('$', ''));
                    has_error = false;
                }   
                
                this.company_spend_error = has_error; 
            },

            validateSpendAbility: function(e) {
                var has_error = false;

                if (this.company_spend_ability) {
                    var values = this.company_spend_ability.split('-');
        
                    var p1 = values[0].replace('$', '');
                    var p2 = values[1].replace('$', '');

                    if ((p1 > p2 || p2 < p1)) {
                        has_error = true;
                    } else {
                        has_error = false;
                    }

                    p1 = this.formatPrice(p1);
                    p2 = this.formatPrice(p2);

                    this.company_spend_ability = p1 + ' - ' + p2;
                    
                } else {
                    has_error = true;
                }

                this.company_spend_ability_error = has_error; 
            },

            isNumber: function(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;

                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46 && charCode !== 45) {
                    evt.preventDefault();
                } else {
                    return true;
                }
            },

            formatPrice: function(num) {
                console.log(num);

                var p = parseFloat(num).toFixed(2).split(".");

                return "$" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
                    return  num=="-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
                }, "") + "." + p[1];
            },

            openModal: function() {
                this.showModal = true;
            },

            mergeNotes: function(text) {
                 this.showModal = false;
                this.notes = text;
            }
        },

        components: {
            CompanyDataModal
        }
    }
</script>