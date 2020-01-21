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
        
        
      `}</style>
    </>
  )
}
