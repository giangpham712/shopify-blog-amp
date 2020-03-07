import Grid from './styles/Grid';
import Blog from './styles/Blog';
import Color from './styles/Color';
import Image from './styles/Image';
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Grid/>
      <Blog/>
      <Color/>
      <Image/>
      <style jsx global>{`
        .back-cover {
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -ms-background-size: cover;
            -o-background-size: cover;
            background-size: cover
        }
        
        .circle-shadow-xs {
            -webkit-box-shadow: 1px 2px rgba(0, 0, 0, 0.15);
            -moz-box-shadow: 1px 2px rgba(0, 0, 0, 0.15);
            -ms-box-shadow: 1px 2px rgba(0, 0, 0, 0.15);
            -o-box-shadow: 1px 2px rgba(0, 0, 0, 0.15);
            box-shadow: 1px 2px rgba(0, 0, 0, 0.15)
        }
        
        .circle-shadow-sm {
            -webkit-box-shadow: 2px 4px rgba(0, 0, 0, 0.5);
            -moz-box-shadow: 2px 4px rgba(0, 0, 0, 0.5);
            -ms-box-shadow: 2px 4px rgba(0, 0, 0, 0.5);
            -o-box-shadow: 2px 4px rgba(0, 0, 0, 0.5);
            box-shadow: 2px 4px rgba(0, 0, 0, 0.5)
        }
        
        .circle-shadow-md {
            -webkit-box-shadow: 4px 6px rgba(0, 0, 0, 0.5);
            -moz-box-shadow: 4px 6px rgba(0, 0, 0, 0.5);
            -ms-box-shadow: 4px 6px rgba(0, 0, 0, 0.5);
            -o-box-shadow: 4px 6px rgba(0, 0, 0, 0.5);
            box-shadow: 4px 6px rgba(0, 0, 0, 0.5)
        }
        
        .box-shadow-xs {
            -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
            -moz-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
            -ms-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
            -o-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15)
        }
        
        .box-shadow-sm {
            -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            -moz-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            -ms-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            -o-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)
        }
        
        .border-rad-sm {
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            -ms-border-radius: 2px;
            -o-border-radius: 2px;
            border-radius: 2px
        }
        
        .border-rad-md {
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            -ms-border-radius: 4px;
            -o-border-radius: 4px;
            border-radius: 4px
        }
        
        .border-rad-lg {
            -webkit-border-radius: 6px;
            -moz-border-radius: 6px;
            -ms-border-radius: 6px;
            -o-border-radius: 6px;
            border-radius: 6px
        }
        
        .transition-very-fast {
            -webkit-transition: all 0.15s;
            -moz-transition: all 0.15s;
            -ms-transition: all 0.15s;
            -o-transition: all 0.15s;
            transition: all 0.15s
        }
        
        .transition-fast {
            -webkit-transition: all 0.35s;
            -moz-transition: all 0.35s;
            -ms-transition: all 0.35s;
            -o-transition: all 0.35s;
            transition: all 0.35s
        }
        
        .hed_title_text {
            font: normal 28px/30px TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;
            letter-spacing: 0px
        }
        
        .dek_title_text {
            font: normal 14px/16px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
            letter-spacing: 0px
        }
        
        .page_title_text {
            font: normal 24px/26px TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;
            letter-spacing: 0px
        }
        
        .section_title_text {
            font: normal 20px/22px TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;
            letter-spacing: 0px
        }
        .module_title_text {
            font: normal 16px/18px TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;
            letter-spacing: 0px
        }
        
        .content_text {
            font: normal 14px/20px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
            letter-spacing: 0px
        }
        
        .caption_text {
            font: normal 12px/16px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
            letter-spacing: 0px
        }
        
        .caption_s_text {
            font: normal 10px/14px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
            letter-spacing: 0px
        }
        
        .callout_text {
            font: bold 12px/14px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
            letter-spacing: 2px
        }
        
        .callout_s_text,
        .btn,
        .btn--secondary,
        .rte .btn--secondary,
        .btn-main,
        .rte .btn-main {
            font: bold 12px/14px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
            letter-spacing: 2px
        }
        
        .nav-bar {
            height: 40px
        }
        
        .nav-bar li {
            padding-left: 13px;
            padding-right: 13px;
            text-transform: uppercase
        }
        
        .nav-bar li .site-nav__link {
            padding: 0 5px
        }
        
        .nav-bar li .site-nav__link:hover {
            border-bottom: 1px solid #fff;
            border-color: inherit;
            cursor: auto
        }
        
        ul.site-nav__dropdown li {
            display: inline
        }
        
        @font-face {
            font-family: 'Avenir Next Regular';
            src: url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-Regular.eot?v=5819296855032654131");
            src: url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-Regular.eot?v=5819296855032654131#iefix") format("embedded-opentype"), url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-Regular.woff?v=13873746074351927337") format("woff"), url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-Regular.ttf?613130") format("truetype");
            font-weight: 100;
            font-style: normal;
            font-display: swap
        }
        
        @font-face {
            font-family: 'Avenir Next Demi';
            src: url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-DemiBold.eot?v=17062572588302327893");
            src: url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-DemiBold.eot?v=17062572588302327893#iefix") format("embedded-opentype"), url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-DemiBold.woff2?v=12146958317600131592") format("woff2"), url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-DemiBold.woff?v=7506880630176634936") format("woff"), url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-DemiBold.ttf?v=11980951721996759281") format("truetype"), url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-DemiBold.svg?v=10414489086591773921#AvenirNext-DemiBold") format("svg");
            font-weight: 100;
            font-style: normal;
            font-display: swap
        }
        
        @font-face {
            font-family: 'icons';
            src: url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/icons.eot?v=17878346325120579912");
            src: url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/icons.eot?v=17878346325120579912#iefix") format("embedded-opentype"), url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/icons.woff?v=15139035312530068585") format("woff"), url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/icons.ttf?v=7804150951971959725") format("truetype"), url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/icons.svg?v=11057981606795097262#timber-icons") format("svg");
            font-weight: normal;
            font-style: normal;
            font-display: swap
        }
        
        .clearfix:after {
            content: '';
            display: table;
            clear: both
        }
        
        *,
        input,
        :before,
        :after {
            box-sizing: border-box
        }
        
        html,
        body {
            padding: 0;
            margin: 0
        }
        
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        main,
        nav,
        section,
        summary {
            display: block
        }
        
        audio,
        canvas,
        progress,
        video {
            display: inline-block;
            vertical-align: baseline
        }
        
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            height: auto
        }
        
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-decoration {
            -webkit-appearance: none
        }
        
        .show {
            display: block 
        }
        
        .hide {
            display: none 
        }
        
        .text-left {
            text-align: left 
        }
        
        .text-right {
            text-align: right 
        }
        
        .text-center {
            text-align: center 
        }
        
        .text-justify {
            text-align: justify 
        }
        
        .left {
            float: left 
        }
        
        .right {
            float: right 
        }
        
        .p-xs {
            padding: 4px 
        }
        
        .p-sm {
            padding: 8px 
        }
        
        .p {
            padding: 16px 
        }
        
        .p-md {
            padding: 24px 
        }
        
        .p-lg {
            padding: 32px 
        }
        
        .p-xlg {
            padding: 48px 
        }
        
        .p-t-xs {
            padding-top: 4px 
        }
        
        .p-t-sm {
            padding-top: 8px 
        }
        
        .p-t {
            padding-top: 16px 
        }
        
        .p-t-md {
            padding-top: 24px 
        }
        
        .p-t-lg {
            padding-top: 32px 
        }
        
        .p-t-xlg {
            padding-top: 48px 
        }
        
        .p-b-xs {
            padding-bottom: 4px 
        }
        
        .p-b-sm {
            padding-bottom: 8px 
        }
        
        .p-b {
            padding-bottom: 16px 
        }
        
        .p-b-md {
            padding-bottom: 24px 
        }
        
        .p-b-lg {
            padding-bottom: 32px 
        }
        
        .p-b-xlg {
            padding-bottom: 48px 
        }
        
        .p-l-xs {
            padding-left: 4px 
        }
        
        .p-l-sm {
            padding-left: 8px 
        }
        
        .p-l {
            padding-left: 16px 
        }
        
        .p-l-md {
            padding-left: 24px 
        }
        
        .p-l-lg {
            padding-left: 32px 
        }
        
        .p-l-xlg {
            padding-left: 48px 
        }
        
        .p-r-xs {
            padding-right: 4px 
        }
        
        .p-r-sm {
            padding-right: 8px 
        }
        
        .p-r {
            padding-right: 16px 
        }
        
        .p-r-md {
            padding-right: 24px 
        }
        
        .p-r-lg {
            padding-right: 32px 
        }
        
        .p-r-xlg {
            padding-right: 48px 
        }
        
        .p-v-xs {
            padding-top: 4px ;
            padding-bottom: 4px 
        }
        
        .p-v-sm {
            padding-top: 8px ;
            padding-bottom: 8px 
        }
        
        .p-v {
            padding-top: 16px ;
            padding-bottom: 16px 
        }
        
        .p-v-md {
            padding-top: 24px ;
            padding-bottom: 24px 
        }
        
        .p-v-lg {
            padding-top: 32px ;
            padding-bottom: 32px 
        }
        
        .p-v-xlg {
            padding-top: 48px ;
            padding-bottom: 48px 
        }
        
        .no-padding-h {
            padding-right: 4px ;
            padding-left: 4px 
        }
        
        .p-h-xs {
            padding-right: 4px ;
            padding-left: 4px 
        }
        
        .p-h-sm {
            padding-right: 8px ;
            padding-left: 8px 
        }
        
        .p-h {
            padding-right: 16px ;
            padding-left: 16px 
        }
        
        .p-h-md {
            padding-right: 24px ;
            padding-left: 24px 
        }
        
        .p-h-lg {
            padding-right: 32px ;
            padding-left: 32px 
        }
        
        .p-h-xlg {
            padding-right: 48px ;
            padding-left: 48px 
        }
        
        .no-margin {
            margin: 0px 
        }
        
        .m-xs {
            margin: 4px 
        }
        
        .m-sm {
            margin: 8px 
        }
        
        .m {
            margin: 16px 
        }
        
        .m-md {
            margin: 24px 
        }
        
        .m-lg {
            margin: 32px 
        }
        
        .m-xlg {
            margin: 48px 
        }
        
        .m-t-xs {
            margin-top: 4px 
        }
        
        .m-t-sm {
            margin-top: 8px 
        }
        
        .m-t {
            margin-top: 16px 
        }
        
        .m-t-md {
            margin-top: 24px 
        }
        
        .m-t-lg {
            margin-top: 32px 
        }
        
        .m-t-xlg {
            margin-top: 48px 
        }
        
        .m-t-1x {
            margin-top: 100px 
        }
        
        .m-b-xs {
            margin-bottom: 4px 
        }
        
        .m-b-sm {
            margin-bottom: 8px 
        }
        
        .m-b {
            margin-bottom: 16px 
        }
        
        .m-b-md {
            margin-bottom: 24px 
        }
        
        .m-b-lg {
            margin-bottom: 32px 
        }
        
        .m-b-xlg {
            margin-bottom: 48px 
        }
        
        .m-l-xs {
            margin-left: 4px 
        }
        
        .m-l-sm {
            margin-left: 8px 
        }
        
        .m-l {
            margin-left: 16px 
        }
        
        .m-l-md {
            margin-left: 24px 
        }
        
        .m-l-lg {
            margin-left: 32px 
        }
        
        .m-l-xlg {
            margin-left: 48px 
        }
        
        .m-r-xs {
            margin-right: 4px 
        }
        
        .m-r-sm {
            margin-right: 8px 
        }
        
        .m-r {
            margin-right: 16px 
        }
        
        .m-r-md {
            margin-right: 24px 
        }
        
        .m-r-lg {
            margin-right: 32px 
        }
        
        .m-r-xlg {
            margin-right: 48px 
        }
        
        .no-margin-v {
            margin-top: 0px ;
            margin-bottom: 0px 
        }
        
        .m-v-xs {
            margin-top: 4px ;
            margin-bottom: 4px 
        }
        
        .m-v-sm {
            margin-top: 8px ;
            margin-bottom: 8px 
        }
        
        .m-v {
            margin-top: 16px ;
            margin-bottom: 16px 
        }
        
        .m-v-md {
            margin-top: 24px ;
            margin-bottom: 24px 
        }
        
        .m-v-lg {
            margin-top: 32px ;
            margin-bottom: 32px 
        }
        
        .m-v-xlg {
            margin-top: 48px ;
            margin-bottom: 48px 
        }
        
        .no-margin-h {
            margin-right: 0px ;
            margin-left: 0px 
        }
        
        .m-h-xs {
            margin-right: 4px ;
            margin-left: 4px 
        }
        
        .m-h-sm {
            margin-right: 8px ;
            margin-left: 8px 
        }
        
        .m-h {
            margin-right: 16px ;
            margin-left: 16px 
        }
        
        .m-h-md {
            margin-right: 24px ;
            margin-left: 24px 
        }
        
        .m-h-lg {
            margin-right: 32px ;
            margin-left: 32px 
        }
        
        .m-h-xlg {
            margin-right: 48px ;
            margin-left: 48px 
        }
        
        .b-a {
            border: 1px solid #dddee0
        }
        
        html {
            background-color: #fff
        }
        
        body {
            background-color: #fff
        }
        
        [tabindex='-1']:focus {
            outline: none
        }
        
        .wrapper {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 16px;
            padding-left: 8px;
            padding-right: 8px
        }
        
        .wrapper:after {
            content: '';
            display: table;
            clear: both
        }
        
        .main-content {
            display: block
        }
        
        .display-table {
            display: table;
            table-layout: fixed;
            width: 100%
        }
        
        .display-table-cell {
            display: table-cell;
            vertical-align: middle;
            float: none
        }
        
        .visually-hidden {
            position: absolute;
            overflow: hidden;
            clip: rect(0 0 0 0);
            height: 1px;
            width: 1px;
            margin: -1px;
            padding: 0;
            border: 0
        }
        
        body,
        input,
        textarea,
        button,
        select {
            font-size: 14px;
            line-height: 1.3;
            font-family: "Avenir Next Regular", "Times New Roman", serif;
            color: #333;
            font-weight: 300;
            -webkit-font-smoothing: antialiased;
            -webkit-text-size-adjust: 100%
        }
        
        h1,
        .h1,
        h2,
        .h2,
        h3,
        .h3,
        h4,
        .h4,
        h5,
        .h5 {
            display: block;
            font-family: "Times New Roman", "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: 100;
            margin: 0 0 0.5em;
            line-height: 1.4
        }
        
        h1 a,
        .h1 a,
        h2 a,
        .h2 a,
        h3 a,
        .h3 a,
        h4 a,
        .h4 a,
        h5 a,
        .h5 a {
            text-decoration: none;
            font-weight: inherit
        }
        
        h6,
        .h6 {
            display: block;
            font-family: "Avenir Next Demi", "Times New Roman", serif;
            font-weight: 100;
            margin: 0 0 0.5em;
            line-height: 1.4
        }
        
        h6 a,
        .h6 a {
            text-decoration: none;
            font-weight: inherit
        }
        
        h1,
        .h1 {
            font-size: 2.5em;
            line-height: 95%;
            letter-spacing: 0px
        }
        
        h2,
        .h2 {
            font-size: 2.2em;
            line-height: 100%;
            letter-spacing: 0px
        }
        
        h3,
        .h3 {
            font-size: 2em;
            line-height: 90%;
            letter-spacing: 0px
        }
        
        h4,
        .h4 {
            font-size: 1.6em;
            line-height: 100%;
            letter-spacing: 0px
        }
        
        h5,
        .h5 {
            font-size: 1em;
            line-height: 100%;
            letter-spacing: 0px
        }
        
        h6,
        .h6 {
            font-size: 1.78571em;
            line-height: 100%;
            letter-spacing: 0px
        }
        
        .h7 {
            font-size: 35px
        }
        
        .h8 {
            font-size: 15px;
            line-height: 100%;
            text-transform: uppercase
        }
        
        p,
        .p-tag {
            margin: 0 0 8px 0
        }
        
        p.alternate,
        .alternate.p-tag {
            font-family: "Times New Roman", "Helvetica Neue", Helvetica, Arial, sans-serif
        }
        
        .p-tag {
            font-size: 14px;
            line-height: 1.3;
            font-family: "Avenir Next Regular", "Times New Roman", serif;
            color: #333;
            font-weight: 300;
            -webkit-font-smoothing: antialiased;
            -webkit-text-size-adjust: 100%
        }
        
        em {
            font-style: italic
        }
        
        b,
        strong {
            font-weight: bold
        }
        
        small {
            font-size: 0.9em
        }
        
        sup,
        sub {
            position: relative;
            font-size: 60%;
            vertical-align: baseline
        }
        
        sup {
            top: -0.5em
        }
        
        sub {
            bottom: -0.5em
        }
        
        ::selection {
            background: #FDE4DF;
            color: #333;
            text-shadow: none
        }
        
        code,
        pre {
            background-color: #faf7f5;
            font-family: Consolas, monospace;
            font-size: 1em;
            border: 0 none;
            padding: 0 2px;
            color: #51ab62
        }
        
        pre {
            overflow: auto;
            padding: 8px;
            margin: 0 0 16px
        }
        
        hr {
            clear: both;
            border-top: solid #e5e5e5;
            border-width: 1px 0 0;
            margin: 16px 0;
            height: 0
        }
        
        hr.hr--small {
            margin: 8px 0
        }
        
        hr.hr--clear {
            border-top-color: transparent
        }
        
        .section-header {
            margin-bottom: 10.66667px
        }
        
        .section-header__right .form-horizontal,
        .section-header__right .collection-view {
            display: inline-block;
            vertical-align: middle
        }

        .rte {
            margin-bottom: 8px
        }
        
        .rte a {
            text-decoration: underline
        }
        
        .rte h1,
        .rte .h1,
        .rte h2,
        .rte .h2,
        .rte h3,
        .rte .h3,
        .rte h4,
        .rte .h4,
        .rte h5,
        .rte .h5,
        .rte h6,
        .rte .h6 {
            margin-top: 2em
        }
        
        .rte h1:first-child,
        .rte .h1:first-child,
        .rte h2:first-child,
        .rte .h2:first-child,
        .rte h3:first-child,
        .rte .h3:first-child,
        .rte h4:first-child,
        .rte .h4:first-child,
        .rte h5:first-child,
        .rte .h5:first-child,
        .rte h6:first-child,
        .rte .h6:first-child {
            margin-top: 0
        }
        
        .rte h1 a,
        .rte .h1 a,
        .rte h2 a,
        .rte .h2 a,
        .rte h3 a,
        .rte .h3 a,
        .rte h4 a,
        .rte .h4 a,
        .rte h5 a,
        .rte .h5 a,
        .rte h6 a,
        .rte .h6 a {
            text-decoration: none
        }
        
        .rte>div {
            margin-bottom: 8px
        }
        
        .rte li {
            margin-bottom: 0.4em
        }
        
        .rte--header {
            margin-bottom: 0
        }
        
        a {
            color: #333;
            text-decoration: none;
            background: transparent;
            transition: color ease 200ms
        }
        
        .text-link {
            color: #ed3376;
            text-decoration: none;
            background: transparent
        }
        
        .text-link:hover {
            color: #da135b
        }
        
        a:hover,
        a:focus {
            color: #ed3376
        }
        
        a.title {
            color: #333
        }
        
        a.title:hover,
        a.title:focus {
            color: #333
        }
        
        .text-link {
            display: inline;
            border: 0 none;
            background: none;
            padding: 0;
            margin: 0
        }
        
        ul,
        ol {
            margin: 0 0 8px 20px;
            padding: 0
        }
        
        ol {
            list-style: decimal
        }
        
        ul ul,
        ul ol,
        ol ol,
        ol ul {
            margin: 4px 0 5px 20px
        }
        
        li {
            margin-bottom: 0.25em
        }
        
        ul.square {
            list-style: square outside
        }
        
        ul.disc {
            list-style: disc outside
        }
        
        ol.alpha {
            list-style: lower-alpha outside
        }
        
        .no-bullets {
            list-style: none outside;
            margin-left: 0
        }
        
        .inline-list {
            margin-left: 0
        }
        
        .inline-list li {
            display: inline-block;
            margin-bottom: 0
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0
        }
        
        .table-wrap {
            max-width: 100%;
            overflow: hidden;
            -webkit-overflow-scrolling: touch
        }
        
        th {
            font-weight: bold
        }
        
        th,
        td {
            text-align: left;
            padding: 8px;
            border: 1px solid #e5e5e5
        }
        
        svg:not(:root) {
            overflow: hidden
        }
        
        iframe {
            max-width: 100%
        }
        
        form {
            margin-bottom: 0
        }
        
        .form-vertical {
            margin-bottom: 8px
        }
        
        @media screen and (max-width: 768px) {
            input,
            textarea {
                font-size: 16px
            }
        }
        
        input,
        textarea,
        button,
        select {
            padding: 0;
            margin: 0;
            -webkit-user-select: text;
            -moz-user-select: text;
            -ms-user-select: text;
            user-select: text
        }
        
        button {
            background: none;
            border: none;
            cursor: pointer
        }
        
        button,
        input,
        textarea {
            -webkit-appearance: none;
            -moz-appearance: none
        }
        
        button {
            background: none;
            border: none;
            display: inline-block;
            cursor: pointer
        }
        
        input[type="image"] {
            padding-left: 0;
            padding-right: 0
        }
        
        fieldset {
            border: 1px solid #e5e5e5;
            padding: 8px
        }
        
        legend {
            border: 0;
            padding: 0
        }
        
        button,
        input[type="submit"] {
            cursor: pointer
        }
        
        input,
        textarea,
        select {
            border: 1px solid #333;
            max-width: 100%;
            padding: 8px 10px;
            border-radius: 0
        }
        
        input:focus,
        textarea:focus,
        select:focus {
            border: 1px solid #ccc
        }
        
        input[disabled],
        input.disabled,
        textarea[disabled],
        textarea.disabled,
        select[disabled],
        select.disabled {
            cursor: default;
            background-color: #f6f6f6;
            border-color: #b6b6b6
        }
        
        input.input-full,
        textarea.input-full,
        select.input-full {
            width: 100%
        }
        
        textarea {
            min-height: 100px
        }
        
        input[type="checkbox"],
        input[type="radio"] {
            display: inline;
            margin: 0 8px 0 0;
            padding: 0;
            width: auto
        }
        
        input[type="checkbox"] {
            -webkit-appearance: checkbox;
            -moz-appearance: checkbox
        }
        
        input[type="radio"] {
            -webkit-appearance: radio;
            -moz-appearance: radio
        }
        
        input[type="image"] {
            padding-left: 0;
            padding-right: 0
        }
        
        select {
            background-position: right center;
            padding-right: 60px;
            text-indent: 0.01px;
            text-overflow: '';
            cursor: pointer
        }
        
        optgroup {
            font-weight: bold
        }
        
        option {
            color: #000;
            background-color: #fff
        }
        
        select::-ms-expand {
            display: none
        }
        
        .hidden-label {
            position: absolute;
            height: 0;
            width: 0;
            margin-bottom: 0;
            overflow: hidden;
            clip: rect(1px, 1px, 1px, 1px)
        }
        
        label[for] {
            cursor: pointer
        }
        
        input.error,
        select.error,
        textarea.error {
            border-color: #d02e2e;
            background-color: #fff6f6;
            color: #d02e2e
        }
        
        label.error {
            color: #d02e2e
        }
        
        .icon-fallback-text .icon {
            display: none
        }
        
        .icon:before {
            display: none
        }
        
        .pagination {
            margin-bottom: 1em;
            text-align: center
        }
        
        .pagination>span {
            display: inline-block;
            line-height: 1
        }
        
        .pagination a {
            display: block
        }
        
        .pagination a,
        .pagination .page.current {
            padding: 8px
        }
        
        .site-header .grid--table {
            display: table;
            table-layout: fixed;
            width: 100%
        }
        
        .site-header .grid--table>.grid__item {
            float: none;
            display: table-cell;
            vertical-align: middle
        }
        
        .search-bar {
            max-width: 100%
        }
        
        @media screen and (max-width: 768px) {
            .search-bar {
                margin-left: auto;
                margin-right: auto
            }
        }
        
        .nav-bar {
            background-color: #fff
        }
        
        .site-nav,
        .site-nav--mobile {
            font-size: 1em;
            cursor: default;
            margin: 0
        }
        
        .site-nav li,
        .site-nav--mobile li {
            margin: 0;
            display: block
        }
        
        .site-nav>li,
        .site-nav--mobile>li {
            position: relative;
            display: inline-block
        }
        
        .text-right .site-nav--mobile {
            margin: 0 -8px 0 0
        }
        
        .site-nav__link {
            display: block;
            text-decoration: none;
            white-space: nowrap;
            color: #4d4d4d
        }
        
        .site-nav__link:hover,
        .site-nav__link:active,
        .site-nav__link:focus {
            color: #272727
        }
        
        .site-nav__link .icon-arrow-down {
            position: relative;
            top: -2px;
            font-size: 10px;
            padding-left: 4px
        }
        
        .site-nav--active>.site-nav__link {
            font-weight: bold
        }
        
        .site-nav--mobile .site-nav__link {
            display: inline-block
        }
        
        .site-nav__dropdown {
            display: none;
            position: absolute;
            left: 0;
            margin: 0;
            z-index: 5
        }
        
        .supports-no-touch .site-nav--has-dropdown:hover .site-nav__dropdown,
        .site-nav--has-dropdown.nav-hover .site-nav__dropdown,
        .nav-focus+.site-nav__dropdown {
            display: block
        }
        
        .site-nav__dropdown a {
            background-color: #fff
        }
        
        .site-nav__dropdown a:hover,
        .site-nav__dropdown a:active,
        .site-nav__dropdown a:focus {
            background-color: #e6e6e6
        }
        
        .nav-search {
            position: relative;
            padding: 0 0 8px;
            margin: 0 auto;
            text-align: center;
        }
        
        .site-footer {
            background-color: #fff;
            padding: 16px 0;
            color: #333
        }
        
        .grid__image {
            display: block;
            margin: 0 auto 8px
        }
        
        .filter--active {
            font-weight: bold
        }
        
        .breadcrumb a,
        .breadcrumb span {
            display: inline-block;
            padding: 0 7px 0 0;
            margin-right: 7px
        }
        
        .breadcrumb a:first-child,
        .breadcrumb span:first-child {
            padding-left: 0
        }
        
        .note,
        .errors {
            border-radius: 4px;
            padding: 6px 12px;
            margin-bottom: 8px;
            border: 1px solid transparent;
            font-size: 0.9em;
            text-align: left
        }
        
        .note ul,
        .note ol,
        .errors ul,
        .errors ol {
            margin-top: 0;
            margin-bottom: 0
        }
        
        .note li:last-child,
        .errors li:last-child {
            margin-bottom: 0
        }
        
        .note p,
        .note .p-tag,
        .errors p,
        .errors .p-tag {
            margin-bottom: 0
        }
        
        .note {
            border-color: #e5e5e5
        }
        
        .errors ul {
            list-style: disc outside;
            margin-left: 20px
        }
        
        *,
        *:before,
        *:after {
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-overflow-scrolling: touch
        }
        
        .width-auto {
            width: auto 
        }
        
        .width-60 {
            width: 60%
        }
        
        .width-70 {
            width: 70%
        }
        
        .width-80 {
            width: 80%
        }
        
        .width-90 {
            width: 90%
        }
        
        .m-width-xlg {
            min-width: 350px
        }
        
        .m-width-lg {
            min-width: 300px
        }
        
        .m-width-md {
            min-width: 250px
        }
        
        .m-width-sm {
            min-width: 200px
        }
        
        .m-width-xs {
            min-width: 150px
        }
        
        .max-width-100 {
            max-width: 100%
        }
        
        .max-width-50 {
            max-width: 50%
        }
        
        .max-width-lg {
            max-width: 300px
        }
        
        .max-width-xlg {
            max-width: 400px
        }
        
        .max-width-lgx5 {
            max-width: 500px
        }
        
        .max-width-lgx6 {
            max-width: 600px
        }
        
        .max-width-lgx7 {
            max-width: 700px
        }
        
        .max-width-lgx8 {
            max-width: 800px
        }
        
        .max-width-lgx9 {
            max-width: 900px
        }
        
        .max-width-md {
            max-width: 250px
        }
        
        .max-width-sm {
            max-width: 200px
        }
        
        .max-width-xs {
            max-width: 150px
        }
        
        .max-width-xxs {
            max-width: 130px
        }
        
        .label {
            display: inline;
            padding: .3em .6em .2em;
            font-size: 75%;
            line-height: 1;
            color: #fff;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            z-index: 1
        }
        
        a.label:hover,
        a.label:focus {
            color: #fff;
            text-decoration: none;
            cursor: pointer
        }
        
        .label:empty {
            display: none
        }
        
        .btn .label,
        .btn--secondary .label {
            position: relative;
            top: -1px
        }
        
        .thin-u-l {
            border-bottom: 0.08em solid rgba(0, 0, 0, 0.1) 
        }
        
        .thick-u-l {
            border-bottom: 0.08em solid rgba(0, 0, 0, 0.5)
        }
        
        .brand-bg-guava {
            background-color: #fce4de
        }
        
        .brand-bg-hightlight {
            background-color: #f38189
        }
        
        .brand-primary {
            color: #ed3376
        }
        
        .brand-primary-border {
            border: #ed3376 solid 1px
        }
        
        .brand-secondary-border {
            border: #f38189 solid 1px
        }
        
        .brand-primary-hover-border:hover {
            border-color: #ed3376
        }
        
        .brand-deep-guava {
            color: #f38189
        }
        
        .brand-raspberry {
            color: #ea2b63
        }
        
        .no-pic-msg {
            top: 10px 
        }
        
        .main-font {
            font-family: "Times New Roman", serif
        }
        
        .alt-font {
            font-family: "Avenir Next Demi", "Times New Roman", serif
        }
        
        .alt-font-regular {
            font-family: 'Avenir Next Regular', 'Times New Roman', serif
        }
        
        .v-m {
            vertical-align: middle 
        }
        
        .v-t {
            vertical-align: top 
        }
        
        .v-b {
            vertical-align: bottom 
        }
        
        .v-text-t {
            vertical-align: text-top
        }
        
        .v-text-b {
            vertical-align: text-bottom
        }
        
        .v-sup {
            vertical-align: super 
        }
        
        .v-c {
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            align-items: center
        }
        
        .i-16 {
            font-size: 16px;
            vertical-align: -15%
        }
        
        .i-20 {
            font-size: 20px;
            vertical-align: -19%
        }
        
        .i-24 {
            font-size: 24px;
            vertical-align: -23%
        }
        
        .i-36 {
            font-size: 36px;
            vertical-align: -27%
        }
        
        .i-42 {
            font-size: 42px;
            vertical-align: -31%
        }
        
        .no-bg {
            color: inherit;
            background-color: transparent
        }
        
        .no-bgc {
            background-color: transparent 
        }
        
        .pos-rlt {
            position: relative;
            z-index: 1
        }
        
        .pos-abt {
            position: absolute
        }
        
        .pos-fix {
            position: fixed 
        }
        
        .pos-stc {
            position: static 
        }
        
        .block {
            display: block
        }
        
        .block.hide {
            display: none
        }
        
        .inline-grid {
            display: inline-grid
        }
        
        .pull-none {
            float: none
        }
        
        .inline {
            display: inline-block
        }
        
        .inline-16 {
            width: 16px;
            height: 16px
        }
        
        .inline-24 {
            width: 24px;
            height: 24px
        }
        
        .none {
            display: none
        }
        
        .active>.inline,
        .active>.auto .inline {
            display: none
        }
        
        .active>.none,
        .active>.auto .none {
            display: inline-block
        }
        
        .line {
            height: 1px;
            margin: 10px 0;
            overflow: hidden;
            font-size: 0
        }
        
        .line-dashed {
            background-color: transparent;
            border-style: dashed ;
            border-width: 0
        }
        
        .no-focus {
            outline: none
        }
        
        .rounded,
        .circle {
            border-radius: 500px
        }
        
        .clear {
            display: block;
            overflow: hidden
        }
        
        .clear-both {
            clear: both
        }
        
        .no-width {
            width: 0
        }
        
        .no-border {
            border-color: transparent;
            border-width: 0
        }
        
        .no-borders,
        .btn__no-border--primary,
        .btn__no-border--primary:hover,
        .btn__no-border--secondary,
        .btn__no-border--secondary:hover {
            border-width: 0 
        }
        
        .b {
            border-color: rgba(110, 115, 120, 0.1) 
        }
        
        .b-t {
            border-top: 1px solid #dddee0
        }
        
        .b-r {
            border-right: 1px solid #dddee0
        }
        
        .b-b {
            border-bottom: 1px solid #dddee0
        }
        
        .b-l {
            border-left: 1px solid #dddee0
        }
        
        .b-2x {
            border-width: 2px
        }
        
        .b-3x {
            border-width: 3px
        }
        
        .b-4x {
            border-width: 4px
        }
        
        .b-5x {
            border-width: 5px
        }
        
        .b-t-2x {
            border-top-width: 2px 
        }
        
        .b-t-3x {
            border-top-width: 3px 
        }
        
        .b-t-4x {
            border-top-width: 4px 
        }
        
        .b-t-5x {
            border-top-width: 5px 
        }
        
        .b-r-2x {
            border-right-width: 2px 
        }
        
        .b-r-3x {
            border-right-width: 3px 
        }
        
        .b-r-4x {
            border-right-width: 4px 
        }
        
        .b-r-5x {
            border-right-width: 5px 
        }
        
        .b-b-2x {
            border-bottom-width: 2px 
        }
        
        .b-b-3x {
            border-bottom-width: 3px 
        }
        
        .b-b-4x {
            border-bottom-width: 4px 
        }
        
        .b-b-5x {
            border-bottom-width: 5px 
        }
        
        .b-l-2x {
            border-left-width: 2px 
        }
        
        .b-l-3x {
            border-left-width: 3px 
        }
        
        .b-l-4x {
            border-left-width: 4px 
        }
        
        .b-l-5x {
            border-left-width: 5px 
        }
        
        .no-margin {
            margin: 0
        }
        
        .no-margin-l {
            margin-left: 0 
        }
        
        .no-margin-r {
            margin-right: 0 
        }
        
        .margin-auto {
            margin: auto
        }
        
        .m-n {
            margin: -16px
        }
        
        .m-h-n {
            margin-right: -16px;
            margin-left: -16px
        }
        
        .m-v-n {
            margin-top: -16px;
            margin-bottom: -16px
        }
        
        .m-l-n {
            margin-left: -16px
        }
        
        .m-r-n {
            margin-right: -16px
        }
        
        .m-t-n {
            margin-top: -16px
        }
        
        .m-b-n {
            margin-bottom: -16px
        }
        
        .no-padding {
            padding: 0 
        }
        
        .no-padding-l {
            padding-left: 0 
        }
        
        .no-padding-r {
            padding-right: 0 
        }
        
        .no-padding-v {
            padding-top: 0 ;
            padding-bottom: 0 
        }
        
        .padding {
            padding: 8px 8px
        }
        .padding-out {
            margin: -8px -8px
        }
        
        .no-radius {
            border-radius: 0 
        }
        
        .no-r-t {
            border-top-right-radius: 0;
            border-top-left-radius: 0
        }
        
        .no-r-r {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0
        }
        
        .no-r-b {
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0
        }
        
        .no-r-l {
            border-bottom-left-radius: 0;
            border-top-left-radius: 0
        }
        
        .r {
            border-radius: 3px
        }
        
        .r-t {
            border-top-right-radius: 3px;
            border-top-left-radius: 3px
        }
        
        .r-r {
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px
        }
        
        .r-b {
            border-bottom-right-radius: 3px;
            border-bottom-left-radius: 3px
        }
        
        .r-l {
            border-bottom-left-radius: 3px;
            border-top-left-radius: 3px
        }
        
        .r-2x {
            border-radius: 6px
        }
        
        .r-3x {
            border-radius: 9px
        }
        
        .scrollable {
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch
        }
        
        .scrollable.hover {
            overflow-y: hidden 
        }
        
        .scrollable.hover>* {
            margin-top: -1px
        }
        
        .scrollable.hover:hover {
            overflow: visible ;
            overflow-y: auto 
        }
        
        .smart .scrollable {
            overflow-y: auto 
        }
        
        .scroll-x {
            overflow: hidden;
            -webkit-overflow-scrolling: touch
        }
        
        .scroll-y {
            overflow: hidden;
            -webkit-overflow-scrolling: touch;
            overflow-y: auto
        }
        
        .scroll-x {
            overflow-x: auto
        }
        
        .no-shadow {
            -webkit-box-shadow: none ;
            box-shadow: none 
        }
        
        .box-shadow {
            -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05)
        }
        
        .box-shadow-md {
            -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05)
        }
        
        .box-shadow-lg {
            -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05)
        }
        
        .box-shadow-inset {
            -webkit-box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.15);
            box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.15)
        }
        
        .text-shadow {
            text-shadow: 0 4px 0 rgba(0, 0, 0, 0.1)
        }
        
        .no-l-h {
            line-height: 0
        }
        
        .l-h-sm {
            line-height: 0.6
        }
        
        .l-h-md {
            line-height: 1.2
        }
        
        .l-h {
            line-height: 1.42857143
        }
        
        .l-h-1x {
            line-height: 1
        }
        
        .l-h-2x {
            line-height: 2em
        }
        
        .l-s-0x {
            letter-spacing: 0
        }
        
        .l-s-1x {
            letter-spacing: 1px
        }
        
        .l-s-2x {
            letter-spacing: 2px
        }
        
        .l-s-3x {
            letter-spacing: 3px
        }
        
        .l-s {
            letter-spacing: 0.2em
        }
        
        .h-auto {
            height: auto 
        }
        
        .h-4x {
            height: 80px
        }
        
        .font-normal {
            font-weight: normal
        }
        
        .font-thin {
            font-weight: 300
        }
        
        .font-bold {
            font-weight: 700
        }
        
        .text-4x {
            font-size: 4em
        }
        
        .text-3x {
            font-size: 3em
        }
        
        .text-2x {
            font-size: 2em
        }
        
        .text-1-5x {
            font-size: 1.5em
        }
        
        .text-xl {
            font-size: 32px
        }
        
        .text-lg-xl {
            font-size: 28px
        }
        
        .text-lg {
            font-size: 24px
        }
        
        .text-md-lg {
            font-size: 20px
        }
        
        .text-md {
            font-size: 16px
        }
        
        .text-base {
            font-size: 14px
        }
        
        .text-sm {
            font-size: 13px
        }
        
        .text-xs {
            font-size: 12px
        }
        
        .text-xxs {
            font-size: 10px
        }
        
        .text-u-c {
            text-transform: uppercase
        }
        
        .text-l-t {
            text-decoration: line-through
        }
        
        .text-u-l {
            text-decoration: underline
        }
        
        .font-s-i {
            font-style: italic
        }
        
        .text-ellipsis {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap
        }
        
        .w-s-no {
            white-space: nowrap
        }
        
        .text-fade {
            position: relative;
            overflow: hidden
        }
        
        .text-fade:after {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 70%;
            height: 1.2em;
            text-align: right;
            background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff 50%);
            content: ""
        }
        
        .w-20 {
            width: 20px;
            height: 20px
        }
        
        .w-32 {
            width: 32px;
            height: 32px
        }
        
        .w-48 {
            width: 48px;
            height: 48px
        }
        
        .w-64 {
            width: 64px;
            height: 64px
        }
        
        .w-xs {
            width: 90px
        }
        
        .w-sm {
            width: 120px
        }
        
        .w {
            width: 180px
        }
        
        .w-md {
            width: 200px
        }
        
        .w-lg {
            width: 240px
        }
        
        .w-4x {
            width: 440px
        }
        
        @media (max-width: 768px) {
            .mobile-show {
                display: block
            }
            .mobile-hide {
                display: none
            }
        }
        
        .i-16 {
            font-size: 16px;
            vertical-align: -15%
        }
        
        .i-20 {
            font-size: 20px;
            vertical-align: -19%
        }
        
        .i-24 {
            font-size: 24px;
            vertical-align: -23%
        }
        
        .text-dark {
            color: #475069
        }
        
        .text-dark-lt {
            color: #515c78
        }
        
        .text-dark-dk {
            color: #333 
        }
        
        .text-white {
            color: #fff
        }
        
        .text-white-lt {
            color: rgba(255, 255, 255, 0.54)
        }
        
        .text-white-dk {
            color: rgba(255, 255, 255, 0.87)
        }
        
        .text-black {
            color: #000
        }
        
        .text-black-lt {
            color: rgba(0, 0, 0, 0.54)
        }
        
        .text-black-dk {
            color: rgba(0, 0, 0, 0.87)
        }
        
        .active-link {
            color: #ed3376;
            font-weight: 700
        }
        
        h2.info-page,
        .info-page.h2 {
            margin-top: 32px
        }
        
        h2.section-header,
        .section-header.h2 {
            margin: 0 auto 50px;
            font-weight: 500
        }
        
        .banner {
            margin: 20px 0 10px 0
        }
        
        .checkbox {
            -webkit-appearance: checkbox 
        }
        
        .disabled:hover {
            border: 0;
            background-color: #f6f6f6;
            color: #b6b6b6
        }
        
        .right-arrow:after {
            font-size: 84%;
            content: "\\25BA"
        }
        
        .no-m-h-gutter {
            margin-top: 0 ;
            margin-bottom: 0 
        }
        
        .no-m-v-gutter {
            margin-right: 0 ;
            margin-left: 0 
        }
        
        .no-p-h-gutter {
            padding-top: 0 ;
            padding-bottom: 0 
        }
        
        .no-p-v-gutter {
            padding-right: 0 ;
            padding-left: 0 
        }
        
        .vertical-divider {
            border-right: 1px solid #333
        }
        
        .subHead {
            font-size: 22px;
            line-height: 22px
        }
        
        .text-container,
        .media-container {
            position: relative
        }
        
        i.right {
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg)
        }
        
        i.left {
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg)
        }
        
        i.up {
            transform: rotate(-135deg);
            -webkit-transform: rotate(-135deg)
        }
        
        i.down {
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg)
        }
        
        .no-l-style {
            list-style: none
        }
        
        .off-screen {
            position: absolute;
            overflow: hidden;
            left: -99999px
        }
        
        .w-full {
            width: 100%
        }
        
        .w-auto {
            width: auto
        }
        
        .h-full {
            height: 100%
        }
        
        .min-h-5x {
            min-height: 500px
        }
        
        .b-shadow {
            box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.08)
        }
        
        .flex {
            display: flex
        }
        
        .f-wrap {
            flex-wrap: wrap
        }
        
        .f-d-column {
            flex-direction: column
        }
        
        .a-i-center {
            align-items: center
        }
        
        .j-c-center {
            justify-content: center
        }
        
        .j-c-end {
            justify-content: flex-end
        }
        
        .a-s-center {
            align-self: center
        }
        
        .medium-down--f-d-column {
            flex-direction: column
        }
        
        .o-f-hid {
            overflow: hidden
        }
        
        .o-f-vis {
            overflow: visible
        }
        
        .o-f-scl {
            overflow: scroll
        }
        
        .top-0 {
            top: 0
        }
        
        .top-1 {
            top: 1px
        }
        
        .top-2 {
            top: 2px
        }
        
        .top-3 {
            top: 3px
        }
        
        .top-4 {
            top: 4px
        }
        
        .top-5 {
            top: 5px
        }
        
        .top-6 {
            top: 6px
        }
        
        .top-7 {
            top: 7px
        }
        
        .bottom-0 {
            bottom: 0
        }
        
        .left-0 {
            left: 0
        }
        
        .right-0 {
            right: 0
        }
        
        .v-a-mid {
            vertical-align: middle
        }
        
        .pointer {
            cursor: pointer
        }
        
        .no-pointer {
            cursor: none 
        }
        
        .default-cursor {
            cursor: default
        }
        
        .no-scorll-bar::-webkit-scrollbar {
            width: 0px;
            height: 0px;
            background: transparent
        }
        
        .btn-primary .caret-right {
            top: 1px
        }
        
        .bg-tiled,
        .box {
            background-color: rgba(252, 228, 222, 0.1);
            background-image: linear-gradient(45deg, rgba(252, 228, 222, 0.1) 25%, rgba(252, 228, 222, 0.75) 25%, rgba(252, 228, 222, 0.75) 75%, rgba(252, 228, 222, 0.1) 75%, rgba(252, 228, 222, 0.1)), linear-gradient(-45deg, rgba(252, 228, 222, 0.1) 25%, rgba(252, 228, 222, 0.75) 25%, rgba(252, 228, 222, 0.75) 75%, rgba(252, 228, 222, 0.1) 75%, rgba(252, 228, 222, 0.1));
            background-size: 50px 50px
        }
        
        .box {
            background-size: contain
        }
        
        .submenu {
            display: none;
            list-style-type: none
        }
        
        .product-img__container {
            position: relative
        }
        
        .page-content {
            margin-bottom: 20px
        }
        
        .subtext {
            line-height: 20px
        }
        
        #overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #fff;
            filter: alpha(opacity=50);
            -moz-opacity: 0.75;
            -khtml-opacity: 0.75;
            opacity: 0.75;
            z-index: 10
        }
        
        .placeholder {
            background-color: #f6f6f6;
            background-size: cover;
            background-repeat: no-repeat;
            overflow: hidden
        }
        
        .img-small {
            filter: blur(25px);
            transform: scale(1)
        }
        
        ::-webkit-scrollbar {
            width: 10px
        }
        
        ::-webkit-scrollbar-track {
            background: transparent
        }
        
        ::-webkit-scrollbar-thumb {
            background: #fce4de;
            border-radius: 5px
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: #f8beaf
        }
        
        ul#header-right-menu {
            list-style-type: none
        }
        
        ul#header-right-menu li {
            display: inline;
            padding: 0 0 0 7px
        }
        
        .header__dropdown_points {
            margin: 8px 0
        }
        
        .header--dropdown-menu li {
            padding: 0 12px ;
            display: block 
        }
        
        .header--dropdown-menu li:not(:last-child) {
            margin-bottom: 16px 
        }
        
        ul#header-right-menu>li:not(:last-child) {
            position: relative
        }
        
        ul#header-right-menu>li:last-child {
            position: relative
        }
        
        .nav-bk {
            left: 0;
            top: 32px;
            height: 0px;
            z-index: 100;
            transition: height 0.4s;
            padding: 0 
        }
        
        .nav-bk:after {
            content: "";
            position: absolute;
            width: 100%;
            bottom: 1px;
            z-index: -1;
            box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.08)
        }
        
        .sidebar-wrapper {
            display: block;
            width: 40%
        }
        
        .page-content {
            margin: auto;
            float: none
        }
        
        .code {
            font-size: 15px;
            line-height: 15px
        }
        
        .code span {
            color: #ed3376
        }
        
        .center-image {
            margin: auto;
            display: block
        }
        
        .close {
            background: #606061;
            color: #fff;
            line-height: 25px;
            position: absolute;
            right: -12px;
            text-align: center;
            top: -10px;
            width: 24px;
            text-decoration: none;
            font-weight: bold;
            -webkit-border-radius: 12px;
            -moz-border-radius: 12px;
            border-radius: 12px;
            -moz-box-shadow: 1px 1px 3px #000;
            -webkit-box-shadow: 1px 1px 3px #000;
            box-shadow: 1px 1px 3px #000
        }
        
        .close:hover {
            background: #00d9ff
        }
        
        .collection-swatch {
            margin-top: 10px;
            text-align: center
        }
        
        .collection-swatch .swatch label {
            min-width: 18px;
            height: 18px;
            line-height: 16px
        }
        
        .collection-swatch .swatch input+label {
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none
        }
        
        .collection-swatch .swatch .swatch-element {
            display: inline-block;
            margin: 0 4px 4px 0;
            padding: 0;
            float: none
        }
        
        .pagination .current {
            border-bottom: 2px solid #dddee0
        }
        
        .collection-email-signup .email-signup form {
            margin: auto
        }
        
        .read-more {
            text-transform: uppercase;
            text-decoration: underline
        }
        
        .description {
            display: block 
        }
        
        @media (max-width: 480px) {
            .section-header__title {
                font-size: 2em
            }
        }
        
        .product-card {
            transform: scale(0.94)
        }
        
        @media (max-width: 768px) {
            .pick-grid__item {
                min-height: 340px
            }
        }
        
        @media (max-width: 480px) {
            .pick-grid__item {
                min-height: 240px
            }
        }
        
        .shoppable-ig-collage:hover {
            opacity: 0.8
        }
        
        .single-option-selector {
            font-size: 22px
        }
        
        .video-container .bg-img {
            padding-top: 56%;
            background-color: lightgrey
        }
        
        .video-container .bg-img span {
            top: 0;
            left: 0;
            background-color: rgba(255, 255, 255, 0.3)
        }
        
        .upsellPopWindow.btn-secondary {
            right: 8px;
            bottom: 0
        }
        
        .swatch-element .label-text {
            content: 'new';
            color: red;
            font-size: 8px;
            position: absolute;
            top: -18px;
            right: -4px
        }
        
        #jumpToShow .swatch-element .label-text {
            top: -12px
        }
        
        .product_section .swatch-element.animated {
            transform: translate(50vw)
        }
        
        .product_section.animated .swatch-element.animated {
            animation: swatch-element-animation 0.6s forwards
        }
        
        .afterpay-paragraph {
            font-size: 12px
        }
        
        .animate {
            transform: translate3d(0, 0, 0);
            perspective: 1000;
            filter: blur(0);
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            transform-origin: center left
        }
        
        .animate--shrink {
            animation-duration: 1s;
            animation-name: shrink;
            animation-timing-function: 'linear'
        }
        
        .animate--grow {
            animation-duration: 1s;
            animation-timing-function: 'linear';
            animation-name: grow
        }
        
        @media (max-width: 480px) {
            .blog__header h1,
            .blog__header .h1 {
                font-size: 1.6em
            }
        }
        
        .closer-line {
            letter-spacing: -4px
        }

        #search-bar form,
        #mobile-search-bar form {
            position: relative;
            height: 60px;
            overflow: hidden;
            margin: auto;
            -webkit-backface-visibility: hidden;
            background: rgba(0, 0, 0, 0)
        }
        
        #search-bar form.opened,
        #mobile-search-bar form.opened {
            width: 330px
        }
        
        #search-bar form.opened:before,
        #mobile-search-bar form.opened:before {
            position: fixed;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.75)
        }
        
        #search-bar input[type="search"],
        #mobile-search-bar input[type="search"] {
            padding-left: 66px;
            text-align: left;
            position: absolute;
            top: 0;
            right: 0;
            height: 60px;
            width: 0;
            float: left;
            font-size: 20px;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            outline: none;
            border: none;
            color: #4d4d4d
        }
        
        #search-bar form.opened input[type="search"],
        #mobile-search-bar form.opened input[type="search"] {
            width: 300px
        }
        
        #search-bar button,
        #mobile-search-bar button {
            position: absolute;
            top: 6px;
            left: 0;
            width: 60px;
            height: 60px;
            background: #fff;
            border: none;
            color: #ed3376;
            font-size: 1.3em;
            outline: none;
            cursor: pointer
        }
        
        #search-bar form.opened button,
        #mobile-search-bar form.opened button {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0
        }
        
        #search-bar .search-label,
        #mobile-search-bar .search-label {
            color: #ed3376;
            cursor: pointer;
            position: relative;
            bottom: 40px;
            left: 60px;
            width: 150px
        }
        
        .search-bar-line {
            width: 150px;
            margin: -33px 0 0 50px;
            border-top: 1px solid #4d4d4d
        }
        
        .search-bar-wrapper {
            max-width: 100%
        }
        
        .store-service-list {
            margin-left: -8px
        }
        
        @media (max-width: 768px) {
            .store-service-list {
                margin-left: -4px
            }
        }
        
        .store-service-icon-s {
            height: 24px;
            margin: 0 8px
        }
        
        @media (max-width: 768px) {
            .store-service-icon-s {
                height: 20px;
                margin: 0 4px
            }
        }
        
        .store-service-icon {
            height: 48px
        }
        
        .user-list {
            background: #fff;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-bottom: 2rem;
            position: relative
        }
        
        .directory {
            margin: 0;
            height: calc(26 * 60px);
            overflow-y: scroll;
            overflow-x: hidden
        }
        
        .directory>li {
            width: 100%;
            list-style-type: none;
            padding: 5px 5px 5px 15px;
            border-bottom: 1px solid #f7f7f7;
            transition: background 0.2s ease
        }
        
        .directory>li:hover {
            background: #f1f1f1
        }
        
        .section-label {
            font-size: 16px;
            font-weight: 500;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap
        }
        
        .ui-draggable-dragging {
            z-index: 1;
            border-bottom-width: 0 
        }
        
        .ui-draggable-dragging:hover {
            background: transparent 
        }
        
        .ui-draggable-placeholder {
            background: #f1f1f1
        }
        
        #container p,
        #container .p-tag {
            margin: 20px 10px 10px 11px;
            font-size: 20px
        }
        
        #azindex {
            background: #75B9D0;
            float: left;
            margin: 5px 0 20px 10px;
            padding: 0px 5px 15px 5px;
            width: 520px
        }
        
        * html #azindex {
            padding: 5px 5px 10px 5px;
            width: 490px
        }
        
        #index {
            font: bold 100% Verdana, Helvetica, sans-serif;
            margin: 0;
            padding: 0
        }
        
        #index li {
            float: left;
            height: 2em;
            list-style-type: none;
            margin: 0.65em 0.3em;
            padding: 0;
            width: 3em
        }
        
        * html #index li {
            margin: 0.2em 0.2em
        }
        
        #index a:link,
        #index a:visited {
            background: #fff;
            color: navy;
            display: block;
            height: 2em;
            padding: 0.75em 0 0 0;
            text-align: center;
            text-decoration: none;
            width: 3em
        }
        
        #index a:hover {
            background: #93D1E4;
            color: #fff;
            text-decoration: underline
        }
        
        .clear {
            clear: both
        }
        
        #TopBannerMessage {
            z-index: 1000
        }
        
        #TopBannerMessage span.icon-fallback-text {
            bottom: -8px;
            right: 12px
        }
        
        #TopBannerMessage .close-message {
            top: 5px;
            right: 18px
        }
        
        #TopBannerMessage.international-site {
            background-color: #f7f7f7;
            bottom: 0;
            width: 100%;
            z-index: 9999;
            position: fixed
        }
        
        #TopBannerMessage.international-site .close-message {
            top: 2px;
            right: 0
        }
        
        #TopBannerMessage p,
        #TopBannerMessage .p-tag {
            opacity: 0
        }
        
        #TopBannerMessage p.active,
        #TopBannerMessage .active.p-tag {
            -webkit-animation-name: topbanner;
            -webkit-animation-duration: 5s;
            animation-name: topbanner;
            animation-duration: 5s
        }
        
        #PromotionBannerMessage {
            background: linear-gradient(84deg, #732038, #e75666);
            background-size: 200% 200%;
            animation: PromoColorAnimation 6s ease infinite
        }
        
        #PromotionBannerMessage a:hover {
            color: #fff
        }
        
        .desk-top-fix-nav {
            top: -100px;
            position: absolute ;
            transition: top 0.6s
        }
        
        .drawer__header .drawer__close {
            top: 12px;
            right: 15px
        }
        
        #FbLiveWidget {
            position: fixed;
            z-index: 1001;
            top: 5%;
            right: 3%
        }
        
        .scroll-top {
            bottom: 100px;
            right: 60px;
            background: rgba(255, 255, 255, 0.5);
            padding: 4px 6px;
            width: 52px;
            height: 52px;
            box-sizing: border-box;
            font-size: 30px;
            border-radius: 100%;
            color: #fce4de;
            cursor: pointer;
            border: 5px solid #fce4de;
            z-index: 10;
            display: none
        }
        
        @media (max-width: 768px) {
            .scroll-top {
                bottom: 8px;
                right: 18px
            }
        }
        
        .scroll-top:hover {
            color: #f8beaf;
            border: 5px solid #f8beaf
        }
        
        .mobile-pull-img__right .mobile-pull-img__right--content {
            margin-left: 50%;
            text-align: center ;
            padding: 20px 40px
        }
        
        @media (max-width: 480px) {
            .mobile-pull-img__right .mobile-pull-img__right--content {
                margin-left: 0;
                background-color: rgba(255, 255, 255, 0.6)
            }
            .mobile-pull-img__right .mobile-pull-img__right--content .text-md-lg {
                font-size: 16px
            }
        }

        .text-outline {
            -webkit-background-clip: text;
            -webkit-text-stroke: 1px #333;
            -webkit-text-fill-color: #f38189
        }
        
        .black-trace {
            text-shadow: #333 0.02em 0.02em 0, #333 -0.02em -0.02em 0, #333 -0.03em 0.02em 0, #333 0.02em -0.02em 0
        }
        
        .select-hidden {
            display: none;
            visibility: hidden;
            padding-right: 10px
        }
        
        .select {
            display: inline-block;
            position: relative;
            font-size: 16px;
            color: #333;
            width: 100%;
            height: 40px
        }
        
        @media (max-width: 768px) {
            #custmeta input[type="submit"] {
                display: block
            }
        }
        
        .fa-star,
        .fa-star-o,
        .fa-star-half-o {
            color: #ed3376 
        }
        
        .summary-rating-bar>div {
            background: #ed3376 ;
            color: #fff 
        }
        
        h2.stamped-header-title,
        .stamped-header-title.h2 {
            display: none 
        }
        
        .hide-text span.stamped-badge-caption {
            display: none
        }
        
        .fa-star:before,
        .fa-star-o:before,
        .fa-star-half-o:before {
            font-size: 17px 
        }
        
        .selector-wrapper {
            position: absolute;
            left: 9999px
        }
        
        i.right {
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg)
        }
        
        i.left {
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg)
        }
        
        i.up {
            transform: rotate(-135deg);
            -webkit-transform: rotate(-135deg)
        }
        
        i.down {
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg)
        }
        
        @media (max-width: 480px) {
            ul.icon-block li {
                margin: 0;
                font-size: 9px
            }
            ul.icon-block li span {
                vertical-align: super
            }
        }
      `}</style>
    </>
  )
}
