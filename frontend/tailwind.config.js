/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      secondary: "#7F56D9",

      transparent: "#FFFFFF00",

      bg_color: "#343541",
      chats_side_bar: "#2F303E",

      nav_link_color: "#FFFFFF",

      dropdown_menu_bg_color: "#FFFFFF",
      dropdown_menu_item_color: "#2F303E",

      primary_button_label_color: "#FFFFFF",

      social_button_bg_color: "#FFFFFF",
      social_button_border_color: "#D0D5DD",
      social_button_text_color: "#343541",

      sidebar_chat_item_border_color: "#FFFFFF",
      sidebar_chat_item_text_color: "#FFFFFF",
      sidebar_chat_item_bg_color: "#2a2b36",

      chat_message_field_bg_color: "#3E3F4B",
      chat_message_field_text_color: "#FFFFFF",
      chat_message_field_placeholder_color: "#9C9C9C",

      chat_user_message_bg_color: "#2a2b36",
      chat_user_message_text_color: "#FFFFFF",

      chat_default_preview_text_color: "#FFFFFF",
      chat_default_preview_example_bg_color: "#3E3F4B",
      chat_default_preview_example_text_color: "#EAEAEA",

      auth_form_text_color: "#FFFFFF",

      input_field_label_text_color: "#FFFFFF",
      input_field_text_color: "#FFFFFF",
      input_field_bg_color: "#3E3F4B",
      input_field_border_color: "#484A5C",
      input_field_shadow_color: "#1018280D",
      input_field_placeholder_text_color: "#EAEAEA",
      input_field_error_text_color: "#FF0000",

      signin_signup_text_color: "#6941C6",
      checkbox_bg_color: "#FFFFFF",
      checkbox_border_color: "#D0D5DD",

      terms_condition_text_box: "#2D2E3C",

      features_white_button_color: "#344054",
      badge_color: "#474750",
    },

    extend: {
      fontFamily: {
        inter: "Inter",
      },

      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
