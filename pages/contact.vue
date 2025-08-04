<template>
  <div>
    <div class="container contactus" style="margin-top: 150px">
      <div class="row justify-content-center gap-4">
        <div class="col-12 col-xl-6 col-lg-6">
          <h3 class="theHead" :data-contact="$t('KEEP IN TOUCH')">
            {{ $t("CONTACT US NOW") }}
          </h3>
          <div class="accordion d-flex flex-column gap-3" id="accordionExample">
            <div
              v-for="(item, index) in filteredItems"
              :key="index"
              class="accordion-item"
            >
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse${index}`"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <img src="@/assets/images/map.svg" alt="" />
                  <span>{{ item.name }}</span>
                </button>
              </h2>
              <div
                :id="`collapse${index}`"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div
                    class="branches d-flex nav nav-pills"
                    :id="`pills-tab${index}`"
                  >
                    <div
                      v-for="(branch, bIndex) in item.types"
                      :key="bIndex"
                      class="d-flex nav-item gap-2"
                    >
                      <button
                        @click="checkBranch = bIndex"
                        class="nav-link px-4"
                        :class="{ active: bIndex === 0 }"
                        :aria-selected="
                          branch.branches.length >= 1 ? true : false
                        "
                        :id="`pill#stab${index}`"
                        data-bs-toggle="pill"
                        :data-bs-target="`#pills-tab${index}-${bIndex}`"
                        type="button"
                        :role="
                          branch.branches.length >= 1 ? 'presentation' : 'tab'
                        "
                        style="
                          cursor: pointer;
                          white-space: nowrap;
                          border-radius: 18px;
                        "
                      >
                        {{ branch.name }}
                      </button>
                    </div>
                  </div>
                  <div class="tab-content">
                    <div v-for="(model, mindex) in item.types" :key="mindex">
                      <div
                        class="tab-pane fade"
                        :class="{ 'show active': mindex === 0 }"
                        :id="`pills-tab${index}-${mindex}`"
                        role="tabpanel"
                        :aria-labelledby="`pill-tab${index}`"
                        tabindex="0"
                      >
                        <div
                          v-if="checkBranch == mindex"
                          v-for="(branch, bindex) in model.branches"
                          :key="bindex"
                          class="thebranch my-4 row align-items-cente justify-content-between gap-3"
                        >
                          <div class="col-12 col-xl-5 col-lg-5 col-md-5">
                            <h4>{{ branch.name }}</h4>
                            <div class="image">
                              <ClientOnly>
                                <div
                                  v-html="branch.frame"
                                  style="
                                    border: 2px solid #fff;
                                    border-radius: 20px;
                                  "
                                ></div>
                              </ClientOnly>
                              <!-- <button>
                <img src="@/assets/images/local.svg" alt="">
                <span>{{ $t('get directions') }}</span>
               </button> -->
                            </div>
                          </div>
                          <div
                            class="col-12 col-xl-5 col-lg-5 col-md-5 d-flex flex-column align-items-center gap-2"
                          >
                            <h5>{{ $t("contact data") }}</h5>
                            <div
                              class="icons d-flex align-items-center flex-column gap-2"
                            >
                              <div class="icon d-flex align-items-center gap-2">
                                <i
                                  class="fa-solid fa-location-dot"
                                  style="color: #1b395f"
                                ></i>
                                <span>{{ branch.address }}</span>
                              </div>
                              <div class="icon d-flex align-items-center gap-2">
                                <i
                                  class="fa-solid fa-phone"
                                  style="color: #1b395f"
                                ></i>
                                <span>{{ branch.phone }}</span>
                              </div>
                              <div class="icon d-flex align-items-center gap-2">
                                <i
                                  class="fa-brands fa-whatsapp"
                                  style="color: #1b395f"
                                ></i>
                                <span>{{ branch.whatsapp }}</span>
                              </div>
                              <div
                                v-if="generalData"
                                class="icon d-flex align-items-center gap-2"
                              >
                                <i
                                  class="fa-solid fa-envelope"
                                  style="color: #1b395f"
                                ></i>
                                <span>{{ generalData.email }}</span>
                              </div>
                            </div>
                            <h5 class="work">{{ $t("working hours") }}</h5>
                            <div class="text-center">
                              <p>{{ $t("everyday") }}</p>
                              <p v-html="branch.time_of_work"></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-5 col-lg-5 mt-4">
          <form action="" class="mt-5" @submit.prevent>
            <div class="row">
              <div class="inp col-12 my-2">
                <label for="">{{ $t("full name") }}</label>
                <input
                  v-model="objContact.name"
                  type="text"
                  :placeholder="$t('write your name..')"
                />
                <span
                  class="errorMessage text-danger fw-bold"
                  v-if="nameError"
                  >{{ nameError }}</span
                >
              </div>
              <div class="inp col-12 my-2">
                <label for="">{{ $t("email") }}</label>
                <input
                  v-model="objContact.email"
                  type="email"
                  placeholder="example@mail.com.."
                />
                <span
                  class="errorMessage text-danger fw-bold"
                  v-if="emailError"
                  >{{ emailError }}</span
                >
              </div>
              <div class="inp col-12 my-2">
                <label for="">{{ $t("phone") }}</label>
                <input
                  v-model="objContact.phone"
                  type="tel"
                  name="phone"
                  placeholder="05xxxxxxxx"
                />
                <span
                  class="errorMessage text-danger fw-bold"
                  v-if="PhoneError"
                  >{{ PhoneError }}</span
                >
              </div>
              <div class="inp col-12 my-2">
                <label for="">{{ $t("message title") }}</label>
                <input
                  v-model="objContact.title"
                  type="text"
                  :placeholder="$t('write your message title...')"
                />
                <span
                  class="errorMessage text-danger fw-bold"
                  v-if="titleError"
                  >{{ titleError }}</span
                >
              </div>
              <div class="inp col-12 my-2">
                <label for="">{{ $t("your message") }}</label>
                <textarea
                  v-model="objContact.message"
                  style="resize: none"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  :placeholder="$t('write your message here')"
                ></textarea>
                <span
                  class="errorMessage text-danger fw-bold"
                  v-if="messageError"
                  >{{ messageError }}</span
                >
              </div>
              <div class="inp col-12 my-2">
                <div class="check d-flex align-items-center gap-3">
                  <input
                    id="checkTerms"
                    type="checkbox"
                    :value="true"
                    v-model="objContact.terms_and_privacy"
                  />
                  <label for="checkTerms">
                    {{ $t("I have read and unconditionally agree to the") }}
                    <span
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#termsModal"
                      style="text-decoration: underline"
                      >{{ $t("Term And Conditions") }}</span
                    >
                    {{ $t("and") }}
                    <span
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#privacyModal"
                      style="text-decoration: underline"
                      >{{ $t("Privacy Policy") }}</span
                    >
                  </label>
                </div>
                <span
                  class="errorMessage text-danger fw-bold"
                  v-if="terms_and_privacyError"
                  >{{ terms_and_privacyError }}</span>
              </div>
            </div>
            <div
              class="thebtn text-center d-flex align-items-center justify-content-center"
            >
              <button
                class="custom-btn"
                :disabled="isLoading"
                @click="sendContact"
                style="padding: 10px 60px !important"
              >
                <div v-if="!checkForm" class="d-flex align-items-center gap-3">
                  {{ $t("send") }}
                  <div
                    v-if="spinner"
                    class="spinner-border text-light"
                    role="status"
                  ></div>
                </div>
                <span v-else>success</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <toast :check="checkToast" :text1="completed" />

    <loader v-if="pending"></loader>
  </div>
</template>

<script setup>
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import axios from "axios";

const { locale } = useI18n();
let lang = ref(locale);
let url = getUrl();
let cites = ref([]);
let checkToast = ref(false);
let pending = ref(true);
let spinner = ref(false);
let isLoading = ref(false);
let checkBranch = ref(0);
let filteredItems = ref([]);
let generalData = ref([]);
const contactFunc = async () => {
  let allCites = await axios.get(`${url}/branches`, {
    headers: {
      "Content-Language": `${lang.value}`,
    },
  });
  if (allCites.status == 200) {
    pending.value = false;
  }
  cites.value = allCites.data.data;
  filteredItems.value = cites.value.map((item) => ({
    ...item,
    types: item.types.filter((type) => type.branches.length > 0),
  }));
};

const generalFunc = async () => {
  let general = await axios(`${url}/general`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  generalData.value = general.data;
};

generalFunc();
contactFunc();

let objContact = ref({
  message: "",
  email: "",
  title: "",
  name: "",
  phone: "",
  terms_and_privacy: false,
});
let emailError = ref(null);
let PhoneError = ref(null);
let messageError = ref(null);
let nameError = ref(null);
let terms_and_privacyError = ref(null);
let titleError = ref(null);
let checkForm = ref(null);

let completed = ref("Connected successfully");
let success = ref("success");
if (lang.value == "ar") {
  completed.value = "تم الأرسال بنجاح";
  success.value = "نجاح";
} else if (lang.value == "en") {
  completed.value = "Connected successfully";
  success.value = "success";
}

const sendContact = async () => {
  spinner.value = true;
  isLoading.value = true;
  const result = await fetch(`${url}/contact-us`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Content-Language": `${lang.value}`,
    },
    body: JSON.stringify(objContact.value),
  })
    .then((response) => response.json())
    .then((json) => {
      isLoading.value = false;
      spinner.value = false;
      if (json.message) {
        emailError.value =
          json.errors.email == undefined ? null : json.errors.email[0];
        nameError.value =
          json.errors.name == undefined ? null : json.errors.name[0];
        titleError.value =
          json.errors.title == undefined ? null : json.errors.title[0];
        PhoneError.value =
          json.errors.phone == undefined ? null : json.errors.phone[0];
        messageError.value =
          json.errors.message == undefined ? null : json.errors.message[0];
        terms_and_privacyError.value =
          json.errors.terms_and_privacy == undefined
            ? null
            : json.errors.terms_and_privacy[0];
      } else {
        objContact.value.email = "";
        objContact.value.message = "";
        objContact.value.name = "";
        objContact.value.phone = "";
        objContact.value.title = "";
        emailError.value = null;
        nameError.value = null;
        titleError.value = null;
        terms_and_privacyError.value = null;
        messageError.value = null;
        PhoneError.value = null;

        createToast(
          {
            title: completed.value,
          },
          {
            timeout: 4000,
            toastBackgroundColor: "#1B395F",
            showIcon: "true",
            type: "success",
            transition: "bounce",
          }
        );
      }
    });
};

useHead({
  title:
    lang.value == "ar"
      ? "اتصل بنا / الكثيري للسيارات"
      : "alkathiri motors / contact us",
});
</script>

<style lang="scss">
.thebranch {
  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
}
</style>
