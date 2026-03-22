import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">🤖 AI Training Pro</h5>
            <p className="text-muted">
              Профессиональное обучение сотрудников работе с искусственным интеллектом.
              Помогаем компаниям внедрять ИИ-технологии эффективно.
            </p>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Навигация</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-muted text-decoration-none">Главная</Link></li>
              <li className="mb-2"><Link to="/services" className="text-muted text-decoration-none">Услуги</Link></li>
              <li className="mb-2"><Link to="/about" className="text-muted text-decoration-none">О нас</Link></li>
              <li className="mb-2"><Link to="/contacts" className="text-muted text-decoration-none">Контакты</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Услуги</h6>
            <ul className="list-unstyled text-muted">
              <li className="mb-2">Корпоративное обучение</li>
              <li className="mb-2">Индивидуальные программы</li>
              <li className="mb-2">Консалтинг по внедрению ИИ</li>
              <li className="mb-2">Workshop и мастер-классы</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3">Контакты</h6>
            <ul className="list-unstyled text-muted">
              <li className="mb-2">
                <a href="mailto:vlf.ru@yandex.ru" className="text-muted text-decoration-none">
                  📧 vlf.ru@yandex.ru
                </a>
              </li>
              <li className="mb-2">
                <a href="tel:+79605051622" className="text-muted text-decoration-none">
                  📞 +7 (960) 505-16-22
                </a>
              </li>
              <li className="mb-2">📍 г. Москва, Нахимовский проспект, д. 9, корп. 2</li>
              <li className="mb-2">ИП Мартынов Д.А.</li>
              <li className="mb-0">ИНН 370208899823</li>
            </ul>
          </div>
        </div>
        <hr className="my-4 border-secondary" />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-muted mb-0">
              © 2026 AI Training Pro. Все права защищены.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link to="/user-agreement" className="text-muted text-decoration-none me-3">
              Пользовательское соглашение
            </Link>
            <Link to="/privacy" className="text-muted text-decoration-none me-3">
              Политика конфиденциальности
            </Link>
            <Link to="/offer" className="text-muted text-decoration-none">
              Договор оферты
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
