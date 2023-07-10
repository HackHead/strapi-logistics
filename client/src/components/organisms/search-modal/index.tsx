// @ts-nocheck

import $t from '@/locale/global';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
export default function SearchModal({onClose, show}) {
  const [val, setVal] = useState('');
  const router = useRouter();
  const locale = router.locale === 'ua' ? 'uk' : router.locale;
  const $ref = useRef(null)


  const submit = (e) => {
    e.preventDefault();
    if(val.length > 0){
      onClose()
      router.push(`/search?q=${val}`)
    }
  }
  
  const display = show ? 'block' : 'none';
  
  return (
    <>
    <div className={`modal fade show`} id="searchModal" tabIndex={-1} ref={$ref} style={{display: display}}> 
      <form className="modal-dialog modal-fullscreen" onSubmit={(e) => submit(e)}>
        <div
          className="modal-content"
          style={{ background: 'rgba(29, 40, 51, 0.8)' }}
        >
          <div className="modal-header border-0">
            <button
              type="button"
              className="btn bg-white btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            />
          </div>
          <div className="modal-body d-flex align-items-center justify-content-center">
            <div
              className="input-group"
              style={{ maxWidth: '600px' }}
            >
              <input
                type="text"
                className="form-control bg-transparent border-light p-3"
                placeholder={$t[locale].menu.search}
                style={{ color: '#f8f8f8' }}
                value={val}
                onChange={(e) => {setVal(e.target.value)} }
              />
              <button className="btn btn-light px-4" type='submit' >
                <i className="bi bi-search" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    {
      show && <div className="modal-backdrop fade" style={{display: display}}></div>
    }
    </>
  )
}
