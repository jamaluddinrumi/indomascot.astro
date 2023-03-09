<script setup lang="ts">
import { ref } from "vue";
import { dateOptions } from "@src/date";
import { useI18n } from "vue-i18n";
import $device from "@src/device";

const waUrl = import.meta.env.PUBLIC_WA_URL;

const { t, locale } = useI18n();

const lastUpdated = ref("");

lastUpdated.value = new Date("2022-12-21").toLocaleDateString(
  locale.value,
  dateOptions
);
</script>

<template>
  <header class="relative mx-auto mt-8 w-fit lg:mt-12">
    <div
      class="absolute bg-gradient-to-t from-indigo-300 to-idm-title opacity-30 blur-lg"
      :class="[$device.isDesktop ? 'h-[40px] w-[415px]' : 'h-[24px] w-[208px]']"
    />
    <h1 class="text-center text-lg font-bold uppercase lg:text-4xl">
      {{ t("termsAndConditions") }}
    </h1>
  </header>
  <section class="prose mx-auto mt-8 p-4">
    <h2 class="mb-0 text-left text-sm uppercase lg:text-lg">
      {{ t("generalTermsAndConditions") }}
    </h2>
    <ol class="list-decimal p-4">
      <li>
        {{ t("designCanBeSentVia") }}
        <a
          target="_blank"
          :href="waUrl"
          class="whitespace-nowrap text-whatsapp-old-green no-underline"
        >
          <font-awesome-layers class="fa-fw">
            <font-awesome-icon :icon="['fab', 'whatsapp']" aria-hidden="true" />
          </font-awesome-layers>
          <span class="-ml-0.5">WhatsApp</span>
        </a>
        (<span class="italic">recommended</span>) {{ t("or") }} Email.
      </li>
      <li>
        {{ t("paymentTransferredByAccount") }}
        <table class="bank-details unstriped mt-4 tabular-nums">
          <tbody>
            <tr>
              <td class="lg:w-96">
                {{ t("bankName") }}
              </td>
              <td class="w-auto bg-bca lg:w-96">
                <span class="font-bold text-white">BCA</span>
              </td>
            </tr>
            <tr>
              <td class="lg:w-96">
                {{ t("accountHolder") }}
              </td>
              <td class="w-auto bg-bca lg:w-96">
                <span class="font-bold text-white">Jamaluddin Rumi</span>
              </td>
            </tr>
            <tr>
              <td class="lg:w-96">
                {{ t("accountNo") }}
              </td>
              <td class="w-auto bg-bca lg:w-96">
                <span class="font-bold text-white">767-5047-243</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="bank-details unstriped tabular-nums">
          <tbody>
            <tr>
              <td class="lg:w-96">
                {{ t("bankName") }}
              </td>
              <td class="w-auto bg-mandiri lg:w-96">
                <span class="font-bold text-white">Mandiri</span>
              </td>
            </tr>
            <tr>
              <td class="lg:w-96">
                {{ t("accountHolder") }}
              </td>
              <td class="w-auto bg-mandiri lg:w-96">
                <span class="font-bold text-white">Jamaluddin Rumi</span>
              </td>
            </tr>
            <tr>
              <td class="lg:w-96">
                {{ t("accountNo") }}
              </td>
              <td class="w-auto bg-mandiri lg:w-96">
                <span class="font-bold text-white">900-00-3631773-4</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="bank-details unstriped tabular-nums">
          <tbody>
            <tr>
              <td class="lg:w-96">
                {{ t("bankName") }}
              </td>
              <td class="w-auto bg-bni lg:w-96">
                <span class="font-bold text-white">BNI</span>
              </td>
            </tr>
            <tr>
              <td class="lg:w-96">
                {{ t("accountHolder") }}
              </td>
              <td class="w-auto bg-bni lg:w-96">
                <span class="font-bold text-white">Jamaluddin Rumi</span>
              </td>
            </tr>
            <tr>
              <td class="lg:w-96">
                {{ t("accountNo") }}
              </td>
              <td class="w-auto bg-bni lg:w-96">
                <span class="font-bold text-white">0461-3403-73</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="bank-details unstriped tabular-nums">
          <tbody>
            <tr>
              <td class="lg:w-96">
                {{ t("bankName") }}
              </td>
              <td class="w-auto bg-bri lg:w-96">
                <span class="font-bold text-white">BRI</span>
              </td>
            </tr>
            <tr>
              <td class="lg:w-96">
                {{ t("accountHolder") }}
              </td>
              <td class="w-auto bg-bri lg:w-96">
                <span class="font-bold text-white">Jamaluddin Rumi</span>
              </td>
            </tr>
            <tr>
              <td class="lg:w-96">
                {{ t("accountNo") }}
              </td>
              <td class="w-auto bg-bri lg:w-96">
                <span class="font-bold text-white">0029-01-128869-50-6</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="bank-details unstriped tabular-nums">
          <tbody>
            <tr>
              <td class="lg:w-96">
                {{ t("bankName") }}
              </td>
              <td class="w-auto bg-jenius lg:w-96">
                <span class="font-bold text-white">Jenius/BTPN</span>
              </td>
            </tr>
            <tr>
              <td class="lg:w-96">
                {{ t("accountHolder") }}
              </td>
              <td class="w-auto bg-jenius lg:w-96">
                <span class="font-bold text-white">Jamaluddin Rumi</span>
              </td>
            </tr>
            <tr>
              <td class="lg:w-96">
                {{ t("accountNo") }}
              </td>
              <td class="w-auto bg-jenius lg:w-96">
                <span class="font-bold text-white">900-214-686-01</span>
              </td>
            </tr>
          </tbody>
        </table>
      </li>
      <i18n-t keypath="generalTerms.li3" tag="li" scope="global">
        <template #downPayment>
          <span class="italic">(Down Payment)</span>
        </template>
      </i18n-t>
      <li>
        {{ t("mascotCostumeTerms.li1") }}
      </li>
      <li>
        {{ t("mascotCostumeTerms.li2") }}
      </li>
      <li>
        {{ t("generalTerms.li4.shipping") }}
        <div class="wp-block-spacer" style="height: 1rem" aria-hidden="true">
          &nbsp;
        </div>
        <h4 class="text-center">
          <font-awesome-layers class="fa-fw">
            <font-awesome-icon
              :icon="['fas', 'house-chimney']"
              aria-hidden="true"
            />
          </font-awesome-layers>
          {{ t("generalTerms.li4.pickInWorkshop") }}
        </h4>
        <p class="text-center">
          {{ t("generalTerms.li4.youCanPickInWorkshop") }}
        </p>
        <address class="text-center">
          Jl. Cukang Kawung, Gang Bojong Mekar<br />RT 01 RW 15 No 53,
          Cibeunying Kaler,<br />
          Cimenyan, Bandung, Jawa Barat<br />40191, Indonesia
        </address>
        <div class="wp-block-spacer" style="height: 1rem" aria-hidden="true">
          &nbsp;
        </div>
        <h4 class="text-center">
          <font-awesome-layers class="fa-fw">
            <font-awesome-icon :icon="['fas', 'truck']" aria-hidden="true" />
          </font-awesome-layers>
          {{ t("generalTerms.li4.byCourier") }}
        </h4>
        <table class="shipping-details unstriped tabular-nums">
          <tbody>
            <tr>
              <td rowspan="2" class="align-middle">
                {{ t("generalTerms.li4.jabodetabek") }}
              </td>
              <td align="right">
                <a
                  href="http://4848.my.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="4848 Express"
                  class="block"
                >
                  <span>4848 Express</span>
                </a>
              </td>
              <td align="right">
                <a
                  class="block"
                  target="_blank"
                  href="https://wa.me/6281802004848"
                  >0818-0200-4848</a
                >
              </td>
            </tr>
            <tr>
              <td align="right">
                <a
                  href="https://www.sicepat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="SiCepat GOKIL"
                  class="block"
                >
                  <span>SiCepat GOKIL</span>
                </a>
              </td>
              <td align="right">
                <a class="block" target="_blank" href="tel:02150200050"
                  >021-5020-0050</a
                >
              </td>
            </tr>
            <tr>
              <td rowspan="2" class="align-middle">
                {{ t("generalTerms.li4.sumatera") }}
              </td>
              <td align="right">
                <a
                  href="https://www.sicepat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="SiCepat GOKIL"
                  class="block"
                >
                  <span>SiCepat GOKIL</span>
                </a>
              </td>
              <td align="right">
                <a class="block" target="_blank" href="tel:02150200050"
                  >021-5020-0050</a
                >
              </td>
            </tr>
            <tr>
              <td align="right">
                <a
                  href="https://indahonline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Indah Cargo"
                  class="block"
                >
                  <span>Indah Cargo</span>
                </a>
              </td>
              <td align="right">
                <a
                  class="block"
                  target="_blank"
                  href="https://wa.me/628118944456"
                  >0811-894-4456</a
                >
              </td>
            </tr>
            <tr>
              <td class="align-middle">
                {{ t("generalTerms.li4.papua") }}
              </td>
              <td align="right">
                <a
                  href="https://www.sicepat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="SiCepat GOKIL"
                  class="block"
                >
                  <span>SiCepat GOKIL</span>
                </a>
              </td>
              <td align="right">
                <a class="block" target="_blank" href="tel:02150200050"
                  >021-5020-0050</a
                >
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          {{ t("generalTerms.li4.orByCustomDeal") }}
        </p>
      </li>
      <li>
        {{ t("mascotCostumeTerms.li3") }}
      </li>
      <i18n-t keypath="mascotCostumeTerms.li4" scope="global" tag="li">
        <template #company>
          <span class="bangers">{{ t("company") }}</span>
        </template>
      </i18n-t>
      <li>
        {{ t("generalTerms.li5") }}
      </li>
      <i18n-t keypath="generalTerms.li6" scope="global" tag="li">
        <template #invoice>
          <span class="italic">invoice</span>
        </template>
      </i18n-t>
      <li>{{ t("generalTerms.li7") }}</li>
      <li>
        {{ t("generalTerms.li8") }}
      </li>
    </ol>
    <p class="p-4">
      <span class="text-sm italic">{{ t("lastUpdated") }}</span>
      <span class="text-sm italic">
        {{ lastUpdated }}
      </span>
    </p>
  </section>
</template>
