<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <titel-header :classTitel="'title-big'" :text="pageTitle" />
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              class="beanslogo mt-5"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />

            <form @submit.prevent="submit" action="/" class="mt-5">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.name.$model"
                    type="text"
                    class="form-control"
                    id="name-input"
                  />
                  <span
                    v-for="error in v$.name.$errors"
                    :key="error.$uid"
                    class="error-message"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.email.$model"
                    type="email"
                    class="form-control"
                    id="email-input"
                  />
                  <span
                    v-for="error in v$.email.$errors"
                    :key="error.$uid"
                    class="error-message"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="phone-input" class="mb-0"> Phone </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.phone.$model"
                    type="tel"
                    class="form-control"
                    id="phone-input"
                  />
                  <span
                    v-for="error in v$.phone.$errors"
                    :key="error.$uid"
                    class="error-message"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-start">
                  <label for="pmessage" class="mb-3 mt-3 text-center">
                    Your message
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12">
                  <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Leave your comments here"
                    v-model="v$.message.$model"
                  ></textarea>
                  <span
                    v-for="error in v$.message.$errors"
                    :key="error.$uid"
                    class="error-message"
                  >
                    {{ error.$message }}
                  </span>
                </div>
                <!-- <pre>
                  {{ v$.message }}
                </pre> -->
              </div>
              <label>
                <input
                  v-model="v$.agreement.$model"
                  type="checkbox"
                  name="agreement"
                />
                Agree with the offer contract
              </label>
              <span
                v-for="error in v$.agreement.$errors"
                :key="error.$uid"
                class="error-message"
              >
                {{ error.$message }}
              </span>
              <div class="row">
                <div class="col">
                  <button type="submit" class="btn btn-outline-dark send-btn">
                    Send us
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import TitelHeader from "@/components/TitelHeader.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, maxLength } from "@vuelidate/validators";
import { helpers } from "@vuelidate/validators";
import { minLength } from "../validators/minLength";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      pageTitle: "Contact us",
      name: "",
      email: "",
      phone: "",
      message: "",
      agreement: true,
    };
  },
  components: {
    NavBarComponent,
    TitelHeader,
  },
  validations() {
    return {
      name: { required },
      email: { required, email },
      phone: {},
      message: {
        required,
        maxLength: maxLength(20),
        minLength: helpers.withMessage("this value min 5", minLength),
      },
      agreement: {
        required: helpers.withMessage(
          "You must agree with the offer contract",
          (value) => value === true
        ),
      },
    };
  },
  methods: {
    async submit() {
      const isFormCorrect = await this.v$.$validate();
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect) return;
      // actually submit form
      console.log({
        name: this.name,
        phone: this.phone,
        email: this.email,
        message: this.message,
        agreement: this.agreement,
      });
    },
  },
};
</script>

<style scoped>
.error-message {
  color: red;
  display: block;
  margin-top: 5px;
  font-size: 12px;
}
</style>
