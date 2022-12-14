import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _40ed06af = () => interopDefault(import('../pages/account_auth.vue' /* webpackChunkName: "pages/account_auth" */))
const _815ffccc = () => interopDefault(import('../pages/login_page.vue' /* webpackChunkName: "pages/login_page" */))
const _095c6fdd = () => interopDefault(import('../pages/login_page_auth.vue' /* webpackChunkName: "pages/login_page_auth" */))
const _f1545f78 = () => interopDefault(import('../pages/components/accordion.vue' /* webpackChunkName: "pages/components/accordion" */))
const _6a423c58 = () => interopDefault(import('../pages/components/alert.vue' /* webpackChunkName: "pages/components/alert" */))
const _930feeba = () => interopDefault(import('../pages/components/animations.vue' /* webpackChunkName: "pages/components/animations" */))
const _72dc7536 = () => interopDefault(import('../pages/components/avatars.vue' /* webpackChunkName: "pages/components/avatars" */))
const _27e81d58 = () => interopDefault(import('../pages/components/badge_label.vue' /* webpackChunkName: "pages/components/badge_label" */))
const _0b3103f6 = () => interopDefault(import('../pages/components/base.vue' /* webpackChunkName: "pages/components/base" */))
const _1edf7937 = () => interopDefault(import('../pages/components/breadcrumb.vue' /* webpackChunkName: "pages/components/breadcrumb" */))
const _1b606206 = () => interopDefault(import('../pages/components/buttons.vue' /* webpackChunkName: "pages/components/buttons" */))
const _98458242 = () => interopDefault(import('../pages/components/cards.vue' /* webpackChunkName: "pages/components/cards" */))
const _1482e1ca = () => interopDefault(import('../pages/components/color_palette.vue' /* webpackChunkName: "pages/components/color_palette" */))
const _776774e6 = () => interopDefault(import('../pages/components/drop_dropdowns.vue' /* webpackChunkName: "pages/components/drop_dropdowns" */))
const _e05dd876 = () => interopDefault(import('../pages/components/fab_buttons.vue' /* webpackChunkName: "pages/components/fab_buttons" */))
const _f053a9f6 = () => interopDefault(import('../pages/components/fancy_footer.vue' /* webpackChunkName: "pages/components/fancy_footer" */))
const _bf5feafe = () => interopDefault(import('../pages/components/fancy_toolbar.vue' /* webpackChunkName: "pages/components/fancy_toolbar" */))
const _2622e677 = () => interopDefault(import('../pages/components/filters.vue' /* webpackChunkName: "pages/components/filters" */))
const _7a423e62 = () => interopDefault(import('../pages/components/footer.vue' /* webpackChunkName: "pages/components/footer" */))
const _73f8bffa = () => interopDefault(import('../pages/components/grid.vue' /* webpackChunkName: "pages/components/grid" */))
const _71efd34a = () => interopDefault(import('../pages/components/height.vue' /* webpackChunkName: "pages/components/height" */))
const _6f97f716 = () => interopDefault(import('../pages/components/icons.vue' /* webpackChunkName: "pages/components/icons" */))
const _79825211 = () => interopDefault(import('../pages/components/lists.vue' /* webpackChunkName: "pages/components/lists" */))
const _78fe0bc1 = () => interopDefault(import('../pages/components/masonry.vue' /* webpackChunkName: "pages/components/masonry" */))
const _c47bf7f4 = () => interopDefault(import('../pages/components/modals_dialogs.vue' /* webpackChunkName: "pages/components/modals_dialogs" */))
const _a0d80438 = () => interopDefault(import('../pages/components/notifications.vue' /* webpackChunkName: "pages/components/notifications" */))
const _41e4544c = () => interopDefault(import('../pages/components/overlay.vue' /* webpackChunkName: "pages/components/overlay" */))
const _1435dd4e = () => interopDefault(import('../pages/components/pagination.vue' /* webpackChunkName: "pages/components/pagination" */))
const _7af22f70 = () => interopDefault(import('../pages/components/progress_spinners.vue' /* webpackChunkName: "pages/components/progress_spinners" */))
const _9cdbb64a = () => interopDefault(import('../pages/components/scrollable.vue' /* webpackChunkName: "pages/components/scrollable" */))
const _9fbcddd6 = () => interopDefault(import('../pages/components/slider.vue' /* webpackChunkName: "pages/components/slider" */))
const _426029ac = () => interopDefault(import('../pages/components/sortable.vue' /* webpackChunkName: "pages/components/sortable" */))
const _63b6a7b7 = () => interopDefault(import('../pages/components/swipe_list.vue' /* webpackChunkName: "pages/components/swipe_list" */))
const _1591f499 = () => interopDefault(import('../pages/components/tables.vue' /* webpackChunkName: "pages/components/tables" */))
const _2bff8c32 = () => interopDefault(import('../pages/components/tabs.vue' /* webpackChunkName: "pages/components/tabs" */))
const _43a62575 = () => interopDefault(import('../pages/components/timeline.vue' /* webpackChunkName: "pages/components/timeline" */))
const _7343e412 = () => interopDefault(import('../pages/components/toolbar.vue' /* webpackChunkName: "pages/components/toolbar" */))
const _0aa6baf8 = () => interopDefault(import('../pages/components/tooltips.vue' /* webpackChunkName: "pages/components/tooltips" */))
const _10fad68c = () => interopDefault(import('../pages/components/transitions.vue' /* webpackChunkName: "pages/components/transitions" */))
const _834ac87c = () => interopDefault(import('../pages/components/width.vue' /* webpackChunkName: "pages/components/width" */))
const _6d9b740b = () => interopDefault(import('../pages/dashboard/v1.vue' /* webpackChunkName: "pages/dashboard/v1" */))
const _6da98b8c = () => interopDefault(import('../pages/dashboard/v2.vue' /* webpackChunkName: "pages/dashboard/v2" */))
const _0afbea4e = () => interopDefault(import('../pages/forms/dynamic_fields.vue' /* webpackChunkName: "pages/forms/dynamic_fields" */))
const _6fda520f = () => interopDefault(import('../pages/forms/regular_elements.vue' /* webpackChunkName: "pages/forms/regular_elements" */))
const _37731ae4 = () => interopDefault(import('../pages/forms/validation.vue' /* webpackChunkName: "pages/forms/validation" */))
const _31442d00 = () => interopDefault(import('../pages/forms/wizard.vue' /* webpackChunkName: "pages/forms/wizard" */))
const _38315c16 = () => interopDefault(import('../pages/forms/wizard/step1.vue' /* webpackChunkName: "pages/forms/wizard/step1" */))
const _383f7397 = () => interopDefault(import('../pages/forms/wizard/step2.vue' /* webpackChunkName: "pages/forms/wizard/step2" */))
const _384d8b18 = () => interopDefault(import('../pages/forms/wizard/step3.vue' /* webpackChunkName: "pages/forms/wizard/step3" */))
const _3d1a253a = () => interopDefault(import('../pages/layout/boxed.vue' /* webpackChunkName: "pages/layout/boxed" */))
const _2ad725d8 = () => interopDefault(import('../pages/layout/mini_sidebar.vue' /* webpackChunkName: "pages/layout/mini_sidebar" */))
const _7a5fef34 = () => interopDefault(import('../pages/layout/offcanvas_sidebar.vue' /* webpackChunkName: "pages/layout/offcanvas_sidebar" */))
const _2a662dae = () => interopDefault(import('../pages/layout/top_menu.vue' /* webpackChunkName: "pages/layout/top_menu" */))
const _64088124 = () => interopDefault(import('../pages/pages/blank.vue' /* webpackChunkName: "pages/pages/blank" */))
const _5896f310 = () => interopDefault(import('../pages/pages/blank_header_expanded.vue' /* webpackChunkName: "pages/pages/blank_header_expanded" */))
const _03170bb8 = () => interopDefault(import('../pages/pages/chat.vue' /* webpackChunkName: "pages/pages/chat" */))
const _6e0d0186 = () => interopDefault(import('../pages/pages/contact_list.vue' /* webpackChunkName: "pages/pages/contact_list" */))
const _9ff86f8c = () => interopDefault(import('../pages/pages/contact_list_single.vue' /* webpackChunkName: "pages/pages/contact_list_single" */))
const _709b8c2f = () => interopDefault(import('../pages/pages/data_visualization.vue' /* webpackChunkName: "pages/pages/data_visualization" */))
const _99cd6bbc = () => interopDefault(import('../pages/pages/gallery.vue' /* webpackChunkName: "pages/pages/gallery" */))
const _4cef7578 = () => interopDefault(import('../pages/pages/help_faq.vue' /* webpackChunkName: "pages/pages/help_faq" */))
const _0363ff74 = () => interopDefault(import('../pages/pages/invoices.vue' /* webpackChunkName: "pages/pages/invoices" */))
const _168eba49 = () => interopDefault(import('../pages/pages/invoices/index.vue' /* webpackChunkName: "pages/pages/invoices/index" */))
const _5cc2e052 = () => interopDefault(import('../pages/pages/invoices/new.vue' /* webpackChunkName: "pages/pages/invoices/new" */))
const _842e8a1e = () => interopDefault(import('../pages/pages/invoices/_id.vue' /* webpackChunkName: "pages/pages/invoices/_id" */))
const _db0fcfcc = () => interopDefault(import('../pages/pages/issues.vue' /* webpackChunkName: "pages/pages/issues" */))
const _475a5866 = () => interopDefault(import('../pages/pages/issues/details.vue' /* webpackChunkName: "pages/pages/issues/details" */))
const _c28b1a10 = () => interopDefault(import('../pages/pages/issues/details/_id.vue' /* webpackChunkName: "pages/pages/issues/details/_id" */))
const _fb7ffdba = () => interopDefault(import('../pages/pages/issues/list.vue' /* webpackChunkName: "pages/pages/issues/list" */))
const _606e4af8 = () => interopDefault(import('../pages/pages/mailbox.vue' /* webpackChunkName: "pages/pages/mailbox" */))
const _42c06e07 = () => interopDefault(import('../pages/pages/mailbox/index.vue' /* webpackChunkName: "pages/pages/mailbox/index" */))
const _50f5e387 = () => interopDefault(import('../pages/pages/mailbox/compose.vue' /* webpackChunkName: "pages/pages/mailbox/compose" */))
const _a4d141b2 = () => interopDefault(import('../pages/pages/mailbox/message/_id.vue' /* webpackChunkName: "pages/pages/mailbox/message/_id" */))
const _6d0cc011 = () => interopDefault(import('../pages/pages/notes.vue' /* webpackChunkName: "pages/pages/notes" */))
const _d67f8c42 = () => interopDefault(import('../pages/pages/poi_listing.vue' /* webpackChunkName: "pages/pages/poi_listing" */))
const _8ca3e744 = () => interopDefault(import('../pages/pages/pricing_tables.vue' /* webpackChunkName: "pages/pages/pricing_tables" */))
const _5545b303 = () => interopDefault(import('../pages/pages/settings.vue' /* webpackChunkName: "pages/pages/settings" */))
const _7a6c480c = () => interopDefault(import('../pages/pages/task_board.vue' /* webpackChunkName: "pages/pages/task_board" */))
const _c28fc9d6 = () => interopDefault(import('../pages/pages/user_profile.vue' /* webpackChunkName: "pages/pages/user_profile" */))
const _e862da38 = () => interopDefault(import('../pages/plugins/ajax.vue' /* webpackChunkName: "pages/plugins/ajax" */))
const _7af72702 = () => interopDefault(import('../pages/plugins/calendar.vue' /* webpackChunkName: "pages/plugins/calendar" */))
const _11365526 = () => interopDefault(import('../pages/plugins/calendar_events.vue' /* webpackChunkName: "pages/plugins/calendar_events" */))
const _6779f0ce = () => interopDefault(import('../pages/plugins/charts.vue' /* webpackChunkName: "pages/plugins/charts" */))
const _40f3af6b = () => interopDefault(import('../pages/plugins/code_editor.vue' /* webpackChunkName: "pages/plugins/code_editor" */))
const _b24fadb2 = () => interopDefault(import('../pages/plugins/data_grid.vue' /* webpackChunkName: "pages/plugins/data_grid" */))
const _2acdf25a = () => interopDefault(import('../pages/plugins/datatables.vue' /* webpackChunkName: "pages/plugins/datatables" */))
const _37bd287e = () => interopDefault(import('../pages/plugins/diff_tool.vue' /* webpackChunkName: "pages/plugins/diff_tool" */))
const _a86004c2 = () => interopDefault(import('../pages/plugins/gantt_chart.vue' /* webpackChunkName: "pages/plugins/gantt_chart" */))
const _55de1149 = () => interopDefault(import('../pages/plugins/google_maps.vue' /* webpackChunkName: "pages/plugins/google_maps" */))
const _1bfc39ba = () => interopDefault(import('../pages/plugins/idle_timeout.vue' /* webpackChunkName: "pages/plugins/idle_timeout" */))
const _eac0c9d6 = () => interopDefault(import('../pages/plugins/image_cropper.vue' /* webpackChunkName: "pages/plugins/image_cropper" */))
const _5a225ac7 = () => interopDefault(import('../pages/plugins/push_notifications.vue' /* webpackChunkName: "pages/plugins/push_notifications" */))
const _6bd06f1c = () => interopDefault(import('../pages/plugins/tour.vue' /* webpackChunkName: "pages/plugins/tour" */))
const _2303353c = () => interopDefault(import('../pages/plugins/tree.vue' /* webpackChunkName: "pages/plugins/tree" */))
const _2359597f = () => interopDefault(import('../pages/plugins/vector_maps.vue' /* webpackChunkName: "pages/plugins/vector_maps" */))
const _3574e969 = () => interopDefault(import('../pages/plugins/vue_good_table.vue' /* webpackChunkName: "pages/plugins/vue_good_table" */))
const _b4363562 = () => interopDefault(import('../pages/forms/advanced_elements/checkbox_radio.vue' /* webpackChunkName: "pages/forms/advanced_elements/checkbox_radio" */))
const _d28cbb8c = () => interopDefault(import('../pages/forms/advanced_elements/color_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/color_picker" */))
const _4681b69f = () => interopDefault(import('../pages/forms/advanced_elements/date_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/date_picker" */))
const _22671c21 = () => interopDefault(import('../pages/forms/advanced_elements/date_range_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/date_range_picker" */))
const _272f8896 = () => interopDefault(import('../pages/forms/advanced_elements/inputmask.vue' /* webpackChunkName: "pages/forms/advanced_elements/inputmask" */))
const _52641e56 = () => interopDefault(import('../pages/forms/advanced_elements/multiselect.vue' /* webpackChunkName: "pages/forms/advanced_elements/multiselect" */))
const _6688daf3 = () => interopDefault(import('../pages/forms/advanced_elements/range_slider.vue' /* webpackChunkName: "pages/forms/advanced_elements/range_slider" */))
const _e6c4c926 = () => interopDefault(import('../pages/forms/advanced_elements/rating.vue' /* webpackChunkName: "pages/forms/advanced_elements/rating" */))
const _084b88d4 = () => interopDefault(import('../pages/forms/advanced_elements/select2.vue' /* webpackChunkName: "pages/forms/advanced_elements/select2" */))
const _aae00f9c = () => interopDefault(import('../pages/forms/advanced_elements/switches.vue' /* webpackChunkName: "pages/forms/advanced_elements/switches" */))
const _6d917a20 = () => interopDefault(import('../pages/forms/advanced_elements/time_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/time_picker" */))
const _6464515b = () => interopDefault(import('../pages/forms/examples/advertising_evaluation_form.vue' /* webpackChunkName: "pages/forms/examples/advertising_evaluation_form" */))
const _40440f6b = () => interopDefault(import('../pages/forms/examples/booking_form.vue' /* webpackChunkName: "pages/forms/examples/booking_form" */))
const _45b13e23 = () => interopDefault(import('../pages/forms/examples/car_rental_form.vue' /* webpackChunkName: "pages/forms/examples/car_rental_form" */))
const _280cf86c = () => interopDefault(import('../pages/forms/examples/checkout_form.vue' /* webpackChunkName: "pages/forms/examples/checkout_form" */))
const _7a66ce1f = () => interopDefault(import('../pages/forms/examples/contact_forms.vue' /* webpackChunkName: "pages/forms/examples/contact_forms" */))
const _2802e696 = () => interopDefault(import('../pages/forms/examples/job_application_form.vue' /* webpackChunkName: "pages/forms/examples/job_application_form" */))
const _40b12f04 = () => interopDefault(import('../pages/forms/examples/medical_history_form.vue' /* webpackChunkName: "pages/forms/examples/medical_history_form" */))
const _45039ad9 = () => interopDefault(import('../pages/forms/examples/registration_form.vue' /* webpackChunkName: "pages/forms/examples/registration_form" */))
const _fb7fe1c6 = () => interopDefault(import('../pages/forms/examples/rental_application_form.vue' /* webpackChunkName: "pages/forms/examples/rental_application_form" */))
const _19b55128 = () => interopDefault(import('../pages/forms/examples/transaction_feedback_form.vue' /* webpackChunkName: "pages/forms/examples/transaction_feedback_form" */))
const _2094d2ec = () => interopDefault(import('../pages/forms/wysiwyg/ckeditor.vue' /* webpackChunkName: "pages/forms/wysiwyg/ckeditor" */))
const _309df47e = () => interopDefault(import('../pages/forms/wysiwyg/quill.vue' /* webpackChunkName: "pages/forms/wysiwyg/quill" */))
const _0dd4286d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account_auth",
    component: _40ed06af,
    name: "account_auth"
  }, {
    path: "/login_page",
    component: _815ffccc,
    name: "login_page"
  }, {
    path: "/login_page_auth",
    component: _095c6fdd,
    name: "login_page_auth"
  }, {
    path: "/components/accordion",
    component: _f1545f78,
    name: "components-accordion"
  }, {
    path: "/components/alert",
    component: _6a423c58,
    name: "components-alert"
  }, {
    path: "/components/animations",
    component: _930feeba,
    name: "components-animations"
  }, {
    path: "/components/avatars",
    component: _72dc7536,
    name: "components-avatars"
  }, {
    path: "/components/badge_label",
    component: _27e81d58,
    name: "components-badge_label"
  }, {
    path: "/components/base",
    component: _0b3103f6,
    name: "components-base"
  }, {
    path: "/components/breadcrumb",
    component: _1edf7937,
    name: "components-breadcrumb"
  }, {
    path: "/components/buttons",
    component: _1b606206,
    name: "components-buttons"
  }, {
    path: "/components/cards",
    component: _98458242,
    name: "components-cards"
  }, {
    path: "/components/color_palette",
    component: _1482e1ca,
    name: "components-color_palette"
  }, {
    path: "/components/drop_dropdowns",
    component: _776774e6,
    name: "components-drop_dropdowns"
  }, {
    path: "/components/fab_buttons",
    component: _e05dd876,
    name: "components-fab_buttons"
  }, {
    path: "/components/fancy_footer",
    component: _f053a9f6,
    name: "components-fancy_footer"
  }, {
    path: "/components/fancy_toolbar",
    component: _bf5feafe,
    name: "components-fancy_toolbar"
  }, {
    path: "/components/filters",
    component: _2622e677,
    name: "components-filters"
  }, {
    path: "/components/footer",
    component: _7a423e62,
    name: "components-footer"
  }, {
    path: "/components/grid",
    component: _73f8bffa,
    name: "components-grid"
  }, {
    path: "/components/height",
    component: _71efd34a,
    name: "components-height"
  }, {
    path: "/components/icons",
    component: _6f97f716,
    name: "components-icons"
  }, {
    path: "/components/lists",
    component: _79825211,
    name: "components-lists"
  }, {
    path: "/components/masonry",
    component: _78fe0bc1,
    name: "components-masonry"
  }, {
    path: "/components/modals_dialogs",
    component: _c47bf7f4,
    name: "components-modals_dialogs"
  }, {
    path: "/components/notifications",
    component: _a0d80438,
    name: "components-notifications"
  }, {
    path: "/components/overlay",
    component: _41e4544c,
    name: "components-overlay"
  }, {
    path: "/components/pagination",
    component: _1435dd4e,
    name: "components-pagination"
  }, {
    path: "/components/progress_spinners",
    component: _7af22f70,
    name: "components-progress_spinners"
  }, {
    path: "/components/scrollable",
    component: _9cdbb64a,
    name: "components-scrollable"
  }, {
    path: "/components/slider",
    component: _9fbcddd6,
    name: "components-slider"
  }, {
    path: "/components/sortable",
    component: _426029ac,
    name: "components-sortable"
  }, {
    path: "/components/swipe_list",
    component: _63b6a7b7,
    name: "components-swipe_list"
  }, {
    path: "/components/tables",
    component: _1591f499,
    name: "components-tables"
  }, {
    path: "/components/tabs",
    component: _2bff8c32,
    name: "components-tabs"
  }, {
    path: "/components/timeline",
    component: _43a62575,
    name: "components-timeline"
  }, {
    path: "/components/toolbar",
    component: _7343e412,
    name: "components-toolbar"
  }, {
    path: "/components/tooltips",
    component: _0aa6baf8,
    name: "components-tooltips"
  }, {
    path: "/components/transitions",
    component: _10fad68c,
    name: "components-transitions"
  }, {
    path: "/components/width",
    component: _834ac87c,
    name: "components-width"
  }, {
    path: "/dashboard/v1",
    component: _6d9b740b,
    name: "dashboard-v1"
  }, {
    path: "/dashboard/v2",
    component: _6da98b8c,
    name: "dashboard-v2"
  }, {
    path: "/forms/dynamic_fields",
    component: _0afbea4e,
    name: "forms-dynamic_fields"
  }, {
    path: "/forms/regular_elements",
    component: _6fda520f,
    name: "forms-regular_elements"
  }, {
    path: "/forms/validation",
    component: _37731ae4,
    name: "forms-validation"
  }, {
    path: "/forms/wizard",
    component: _31442d00,
    name: "forms-wizard",
    children: [{
      path: "step1",
      component: _38315c16,
      name: "forms-wizard-step1"
    }, {
      path: "step2",
      component: _383f7397,
      name: "forms-wizard-step2"
    }, {
      path: "step3",
      component: _384d8b18,
      name: "forms-wizard-step3"
    }]
  }, {
    path: "/layout/boxed",
    component: _3d1a253a,
    name: "layout-boxed"
  }, {
    path: "/layout/mini_sidebar",
    component: _2ad725d8,
    name: "layout-mini_sidebar"
  }, {
    path: "/layout/offcanvas_sidebar",
    component: _7a5fef34,
    name: "layout-offcanvas_sidebar"
  }, {
    path: "/layout/top_menu",
    component: _2a662dae,
    name: "layout-top_menu"
  }, {
    path: "/pages/blank",
    component: _64088124,
    name: "pages-blank"
  }, {
    path: "/pages/blank_header_expanded",
    component: _5896f310,
    name: "pages-blank_header_expanded"
  }, {
    path: "/pages/chat",
    component: _03170bb8,
    name: "pages-chat"
  }, {
    path: "/pages/contact_list",
    component: _6e0d0186,
    name: "pages-contact_list"
  }, {
    path: "/pages/contact_list_single",
    component: _9ff86f8c,
    name: "pages-contact_list_single"
  }, {
    path: "/pages/data_visualization",
    component: _709b8c2f,
    name: "pages-data_visualization"
  }, {
    path: "/pages/gallery",
    component: _99cd6bbc,
    name: "pages-gallery"
  }, {
    path: "/pages/help_faq",
    component: _4cef7578,
    name: "pages-help_faq"
  }, {
    path: "/pages/invoices",
    component: _0363ff74,
    children: [{
      path: "",
      component: _168eba49,
      name: "pages-invoices"
    }, {
      path: "new",
      component: _5cc2e052,
      name: "pages-invoices-new"
    }, {
      path: ":id",
      component: _842e8a1e,
      name: "pages-invoices-id"
    }]
  }, {
    path: "/pages/issues",
    component: _db0fcfcc,
    name: "pages-issues",
    children: [{
      path: "details",
      component: _475a5866,
      name: "pages-issues-details",
      children: [{
        path: ":id?",
        component: _c28b1a10,
        name: "pages-issues-details-id"
      }]
    }, {
      path: "list",
      component: _fb7ffdba,
      name: "pages-issues-list"
    }]
  }, {
    path: "/pages/mailbox",
    component: _606e4af8,
    children: [{
      path: "",
      component: _42c06e07,
      name: "pages-mailbox"
    }, {
      path: "compose",
      component: _50f5e387,
      name: "pages-mailbox-compose"
    }, {
      path: "message/:id?",
      component: _a4d141b2,
      name: "pages-mailbox-message-id"
    }]
  }, {
    path: "/pages/notes",
    component: _6d0cc011,
    name: "pages-notes"
  }, {
    path: "/pages/poi_listing",
    component: _d67f8c42,
    name: "pages-poi_listing"
  }, {
    path: "/pages/pricing_tables",
    component: _8ca3e744,
    name: "pages-pricing_tables"
  }, {
    path: "/pages/settings",
    component: _5545b303,
    name: "pages-settings"
  }, {
    path: "/pages/task_board",
    component: _7a6c480c,
    name: "pages-task_board"
  }, {
    path: "/pages/user_profile",
    component: _c28fc9d6,
    name: "pages-user_profile"
  }, {
    path: "/plugins/ajax",
    component: _e862da38,
    name: "plugins-ajax"
  }, {
    path: "/plugins/calendar",
    component: _7af72702,
    name: "plugins-calendar"
  }, {
    path: "/plugins/calendar_events",
    component: _11365526,
    name: "plugins-calendar_events"
  }, {
    path: "/plugins/charts",
    component: _6779f0ce,
    name: "plugins-charts"
  }, {
    path: "/plugins/code_editor",
    component: _40f3af6b,
    name: "plugins-code_editor"
  }, {
    path: "/plugins/data_grid",
    component: _b24fadb2,
    name: "plugins-data_grid"
  }, {
    path: "/plugins/datatables",
    component: _2acdf25a,
    name: "plugins-datatables"
  }, {
    path: "/plugins/diff_tool",
    component: _37bd287e,
    name: "plugins-diff_tool"
  }, {
    path: "/plugins/gantt_chart",
    component: _a86004c2,
    name: "plugins-gantt_chart"
  }, {
    path: "/plugins/google_maps",
    component: _55de1149,
    name: "plugins-google_maps"
  }, {
    path: "/plugins/idle_timeout",
    component: _1bfc39ba,
    name: "plugins-idle_timeout"
  }, {
    path: "/plugins/image_cropper",
    component: _eac0c9d6,
    name: "plugins-image_cropper"
  }, {
    path: "/plugins/push_notifications",
    component: _5a225ac7,
    name: "plugins-push_notifications"
  }, {
    path: "/plugins/tour",
    component: _6bd06f1c,
    name: "plugins-tour"
  }, {
    path: "/plugins/tree",
    component: _2303353c,
    name: "plugins-tree"
  }, {
    path: "/plugins/vector_maps",
    component: _2359597f,
    name: "plugins-vector_maps"
  }, {
    path: "/plugins/vue_good_table",
    component: _3574e969,
    name: "plugins-vue_good_table"
  }, {
    path: "/forms/advanced_elements/checkbox_radio",
    component: _b4363562,
    name: "forms-advanced_elements-checkbox_radio"
  }, {
    path: "/forms/advanced_elements/color_picker",
    component: _d28cbb8c,
    name: "forms-advanced_elements-color_picker"
  }, {
    path: "/forms/advanced_elements/date_picker",
    component: _4681b69f,
    name: "forms-advanced_elements-date_picker"
  }, {
    path: "/forms/advanced_elements/date_range_picker",
    component: _22671c21,
    name: "forms-advanced_elements-date_range_picker"
  }, {
    path: "/forms/advanced_elements/inputmask",
    component: _272f8896,
    name: "forms-advanced_elements-inputmask"
  }, {
    path: "/forms/advanced_elements/multiselect",
    component: _52641e56,
    name: "forms-advanced_elements-multiselect"
  }, {
    path: "/forms/advanced_elements/range_slider",
    component: _6688daf3,
    name: "forms-advanced_elements-range_slider"
  }, {
    path: "/forms/advanced_elements/rating",
    component: _e6c4c926,
    name: "forms-advanced_elements-rating"
  }, {
    path: "/forms/advanced_elements/select2",
    component: _084b88d4,
    name: "forms-advanced_elements-select2"
  }, {
    path: "/forms/advanced_elements/switches",
    component: _aae00f9c,
    name: "forms-advanced_elements-switches"
  }, {
    path: "/forms/advanced_elements/time_picker",
    component: _6d917a20,
    name: "forms-advanced_elements-time_picker"
  }, {
    path: "/forms/examples/advertising_evaluation_form",
    component: _6464515b,
    name: "forms-examples-advertising_evaluation_form"
  }, {
    path: "/forms/examples/booking_form",
    component: _40440f6b,
    name: "forms-examples-booking_form"
  }, {
    path: "/forms/examples/car_rental_form",
    component: _45b13e23,
    name: "forms-examples-car_rental_form"
  }, {
    path: "/forms/examples/checkout_form",
    component: _280cf86c,
    name: "forms-examples-checkout_form"
  }, {
    path: "/forms/examples/contact_forms",
    component: _7a66ce1f,
    name: "forms-examples-contact_forms"
  }, {
    path: "/forms/examples/job_application_form",
    component: _2802e696,
    name: "forms-examples-job_application_form"
  }, {
    path: "/forms/examples/medical_history_form",
    component: _40b12f04,
    name: "forms-examples-medical_history_form"
  }, {
    path: "/forms/examples/registration_form",
    component: _45039ad9,
    name: "forms-examples-registration_form"
  }, {
    path: "/forms/examples/rental_application_form",
    component: _fb7fe1c6,
    name: "forms-examples-rental_application_form"
  }, {
    path: "/forms/examples/transaction_feedback_form",
    component: _19b55128,
    name: "forms-examples-transaction_feedback_form"
  }, {
    path: "/forms/wysiwyg/ckeditor",
    component: _2094d2ec,
    name: "forms-wysiwyg-ckeditor"
  }, {
    path: "/forms/wysiwyg/quill",
    component: _309df47e,
    name: "forms-wysiwyg-quill"
  }, {
    path: "/",
    component: _0dd4286d,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
