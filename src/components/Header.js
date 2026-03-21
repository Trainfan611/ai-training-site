import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            🤖 AI Training Pro
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/')}`} to="/">
                  Главная
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/services')}`} to="/services">
                  Услуги
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/about')}`} to="/about">
                  О нас
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/contacts')}`} to="/contacts">
                  Контакты
                </Link>
              </li>
            </ul>
            <button
              className="btn btn-light ms-lg-3"
              onClick={() => setShowModal(true)}
            >
              Заказать обучение
            </button>
          </div>
        </div>
      </nav>

      {/* Модальное окно с контактами */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setShowModal(false)}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h5 className="modal-title fw-bold">Контакты для связи</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="fs-4 me-3">📍</div>
                    <div>
                      <h6 className="fw-bold mb-1">Адрес</h6>
                      <p className="text-muted mb-0">
                        г. Москва, Нахимовский проспект, д. 9, корп. 2
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="fs-4 me-3">📞</div>
                    <div>
                      <h6 className="fw-bold mb-1">Телефон</h6>
                      <p className="text-muted mb-0">
                        <a href="tel:+79605051622" className="text-decoration-none">+7 (960) 505-16-22</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="fs-4 me-3">📧</div>
                    <div>
                      <h6 className="fw-bold mb-1">Email</h6>
                      <p className="text-muted mb-0">
                        <a href="mailto:vlf.ru@yandex.ru" className="text-decoration-none">
                          vlf.ru@yandex.ru
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="text-center">
                  <p className="text-muted mb-3">Или оставьте заявку на странице</p>
                  <Link to="/contacts" className="btn btn-primary w-100">
                    Перейти к форме заявки
                  </Link>
                </div>

                <hr className="mt-4" />

                <div className="text-muted small">
                  <p className="mb-1"><strong>ИП Мартынов Дмитрий Алексеевич</strong></p>
                  <p className="mb-0">ИНН 370208899823 | ОГРНИП 324370000013172</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
