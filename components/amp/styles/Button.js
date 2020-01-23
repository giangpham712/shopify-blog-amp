export default function Button({ children }) {
  return (
    <>
      <style jsx global>{`
        .btn,
        .btn--secondary,
        .rte .btn--secondary {
            color: #333;
            background: #fff;
            border: 1px solid #333
        }
        
        .btn:hover,
        .btn--secondary:hover {
            color: #ed3376;
            background: #fff;
            border: 1px solid #ed3376
        }
        
        .btn-primary {
            color: #fff;
            background: #333;
            border: 1px solid #333
        }
        
        .btn-primary:hover {
            color: #fff;
            background: #ed3376 !important;
            border: 1px solid #ed3376 !important
        }
        
        .btn-default {
            color: #333;
            background: #fff;
            font-weight: 800;
            border: 0
        }
        
        .btn-default:hover {
            color: #ed3376 !important;
            border: 0
        }
        
        .btn-alternate {
            color: #f38189;
            background: #fff;
            border: 1px solid #f38189
        }
        
        .btn-alternate:hover {
            color: #333;
            background: #fff;
            border: 1px solid #333
        }
        
        .btn-secondary {
            color: #fff;
            transition: all .6s;
            background: #f38189;
            border: 1px solid #f38189
        }
        
        .btn-secondary:hover {
            color: #fff;
            background: #ed3376;
            border: 1px solid #ed3376
        }
        
        .btn-tertiary {
            color: #ed3376;
            background: #fff;
            border: 1px solid #ed3376
        }
        
        .btn-tertiary:hover {
            background: #fff;
            color: #333;
            border: 1px solid #333
        }
        
        .btn-quaternary {
            background: #ed3376 !important;
            color: #fff !important;
            border: 1px solid #ed3376 !important
        }
        
        .btn-quaternary:hover {
            background: #da135b !important;
            color: #fff !important;
            border: 1px solid #da135b !important
        }
        
        .btn-quinary {
            background: #ea2b63;
            color: #fff;
            border: 1px solid #ea2b63
        }
        
        .btn-quinary:hover {
            background: #ce144b;
            color: #fff;
            border: 1px solid #ce144b
        }
        
        .btn__main,
        .btn__bg-white--primary,
        .btn__bg-white--secondary,
        .productAddJS,
        .btn__bg-filled--primary,
        .btn__bg-filled--secondary,
        .btn__no-border--primary,
        .btn__no-border--primary:hover,
        .btn__no-border--secondary,
        .btn__no-border--secondary:hover {
            height: 65px;
            font-size: 16px;
            padding: 24px 34px;
            letter-spacing: 0.2em;
            border-radius: 0;
            margin-bottom: 2px
        }
        
        .btn__bg-white--primary {
            background-color: #fff;
            border: 1px solid #333;
            color: #333
        }
        
        .btn__bg-white--primary:hover {
            border: 1px solid #f38189;
            color: #f38189
        }
        
        .btn__bg-white--secondary {
            background-color: #fff;
            border: 1px solid #ed3376;
            color: #ed3376
        }
        
        .btn__bg-white--secondary:hover {
            border: 1px solid #333;
            color: #333
        }
        
        .btn__filled-builder,
        .btn__bg-filled--primary,
        .btn__bg-filled--primary:hover,
        .btn__bg-filled--secondary,
        .btn__bg-filled--secondary:hover {
            border: 0;
            color: #fff
        }
        
        .productAddJS {
            border: 0
        }
        
        .btn__bg-filled--primary {
            background-color: #333
        }
        
        .btn__bg-filled--primary:hover {
            background-color: #f38189
        }
        
        .btn__bg-filled--secondary {
            background-color: #f38189
        }
        
        .btn__bg-filled--secondary:hover {
            background-color: #ed3376
        }
        
        .btn__no-border--primary {
            color: #333
        }
        
        .btn__no-border--primary:hover {
            color: #f38189
        }
        
        .btn__no-border--secondary {
            color: #f38189
        }
        
        .btn__no-border--secondary:hover {
            color: #333
        }
        
        button {
            overflow: visible
        }
        
        button[disabled],
        html input[disabled] {
            cursor: default
        }
        
        .btn,
        .btn--secondary,
        .rte .btn--secondary,
        .btn-main,
        .rte .btn-main {
            display: inline-block;
            padding: 12px 20px;
            width: auto;
            margin: 0;
            line-height: 100%;
            text-decoration: none;
            text-transform: uppercase;
            text-align: center;
            vertical-align: middle;
            white-space: nowrap;
            cursor: pointer;
            border: 1px solid transparent;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            background-color: #333;
            color: #fff
        }
        
        .btn:active,
        .btn--secondary:active,
        .btn:focus,
        .btn--secondary:focus,
        .btn-main:active,
        .btn-main:focus,
        .rte .btn-main:active,
        .rte .btn-main:focus {
            background-color: #ed3376;
            color: #fff
        }
        
        .btn[disabled],
        [disabled].btn--secondary,
        .btn.disabled,
        .disabled.btn--secondary,
        .btn-main[disabled],
        .btn-main.disabled,
        .rte .btn-main[disabled],
        .rte .btn-main.disabled {
            cursor: default;
            color: #b6b6b6;
            background-color: #f6f6f6
        }
        
        .btn--secondary,
        .rte .btn--secondary {
            background-color: #ed3376
        }
        
        .btn--secondary:hover,
        .rte .btn--secondary:hover {
            background-color: #da135b;
            color: #fff
        }
        
        .btn--secondary:active,
        .btn--secondary:focus,
        .rte .btn--secondary:active,
        .rte .btn--secondary:focus {
            background-color: #ab0f47;
            color: #fff
        }
        
        .btn--small {
            padding: 4px 5px;
            font-size: 0.85714em
        }
        
        .btn--large {
            padding: 12px 15px;
            font-size: 1.14286em
        }
        
        .btn--full {
            width: 100%
        }
      `}</style>
    </>
  )
}
