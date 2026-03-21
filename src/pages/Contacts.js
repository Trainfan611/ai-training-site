import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function Contacts() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    // Отправка через EmailJS
    // ВАЖНО: Замените SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY на ваши ключи из emailjs.com
    emailjs.send(
      'YOUR_SERVICE_ID',      // Замените на ваш Service ID
      'YOUR_TEMPLATE_ID',     // Замените на ваш Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        employees: formData.employees,
        message: formData.message,
        to_email: 'vlf.ru@yandex.ru'
      },
      'YOUR_PUBLIC_KEY'       // Замените на ваш Public Key
    )
    .then(() => {
      setSubmitted(true);
      setSending(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        employees: '',
        message: ''
      });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    })
    .catch((err) => {
      console.error('Ошибка отправки:', err);
      setError(true);
      setSending(false);
    });
  };

  return (
    <div>
      {/* Заголовок */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="fw-bold mb-3">Контакты</h1>
              <p className="lead text-muted mb-4">
                Свяжитесь с нами для обсуждения программы обучения вашей команды
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Основная секция */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row g-5">
            {/* Форма */}
            <div className="col-lg-7">
              <div className="card contact-form p-4">
                <div className="card-body">
                  <h3 className="fw-bold mb-4">Оставить заявку</h3>
                  {submitted ? (
                    <div className="alert alert-success" role="alert">
                      <h5 className="alert-heading">✓ Заявка отправлена!</h5>
                      <p className="mb-0">
                        Спасибо! Наш менеджер свяжется с вами в течение рабочего дня.
                      </p>
                    </div>
                  ) : error ? (
                    <div className="alert alert-danger" role="alert">
                      <h5 className="alert-heading">✗ Ошибка отправки</h5>
                      <p className="mb-0">
                        Пожалуйста, попробуйте ещё раз или позвоните нам по телефону +7 (960) 505-16-22
                      </p>
                    </div>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="name" className="form-label">Ваше имя *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Иван Петров"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="phone" className="form-label">Телефон *</label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+7 (999) 123-45-67"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label">Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="email@company.ru"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="company" className="form-label">Компания</label>
                          <input
                            type="text"
                            className="form-control"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Название компании"
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="employees" className="form-label">
                            Количество сотрудников для обучения
                          </label>
                          <select
                            className="form-select"
                            id="employees"
                            name="employees"
                            value={formData.employees}
                            onChange={handleChange}
                          >
                            <option value="">Выберите количество</option>
                            <option value="1-5">1-5 человек</option>
                            <option value="6-15">6-15 человек</option>
                            <option value="16-30">16-30 человек</option>
                            <option value="31-50">31-50 человек</option>
                            <option value="50+">Более 50 человек</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label htmlFor="message" className="form-label">
                            Комментарий или пожелания
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Расскажите о ваших задачах и ожиданиях от обучения"
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <button 
                            type="submit" 
                            className="btn btn-primary btn-lg w-100"
                            disabled={sending}
                          >
                            {sending ? 'Отправка...' : 'Отправить заявку'}
                          </button>
                          <p className="text-muted small mt-2 mb-0">
                            Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                          </p>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Контактная информация */}
            <div className="col-lg-5">
              <div className="ps-lg-4">
                <h3 className="fw-bold mb-4">Контактная информация</h3>
                
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
                      <small className="text-muted">Пн-Пт с 9:00 до 18:00</small>
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

                <div className="mb-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="fs-4 me-3">💬</div>
                    <div>
                      <h6 className="fw-bold mb-1">Мессенджеры</h6>
                      <div className="d-flex gap-2">
                        <button className="btn btn-outline-success btn-sm">
                          WhatsApp
                        </button>
                        <button className="btn btn-outline-primary btn-sm">
                          Telegram
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                <div>
                  <h6 className="fw-bold mb-3">Реквизиты</h6>
                  <div className="text-muted small">
                    <p className="mb-2">
                      <strong>ИП Мартынов Дмитрий Алексеевич</strong>
                    </p>
                    <p className="mb-2">ИНН 370208899823</p>
                    <p className="mb-2">ОГРНИП 324370000013172</p>
                    <p className="mb-2">Ивановская область, г. Иваново</p>
                    <p className="mb-0">Спецрежим: УСН, ПСН</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Карта */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Как нас найти</h2>
            <p className="text-muted">Мы находимся в центре Москвы</p>
          </div>
          <div className="bg-white rounded p-4 text-center" style={{ height: '400px' }}>
            <div className="h-100 d-flex align-items-center justify-content-center bg-light rounded">
              <div>
                <div className="display-1">🗺️</div>
                <p className="text-muted mt-3">
                  Здесь будет интерактивная карта (Яндекс.Карты или Google Maps)
                </p>
                <p className="text-muted small">
                  г. Москва, Нахимовский проспект, д. 9, корп. 2
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Частые вопросы</h2>
            <p className="text-muted">Ответы на популярные вопросы</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#faq1"
                    >
                      Как проходит обучение?
                    </button>
                  </h2>
                  <div 
                    id="faq1" 
                    className="accordion-collapse collapse show" 
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-muted">
                      Обучение проходит в интерактивном формате: 20% теории и 80% практики. 
                      Участники работают над реальными кейсами, получают обратную связь 
                      от преподавателя и готовые решения для внедрения.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#faq2"
                    >
                      Можно ли обучаться дистанционно?
                    </button>
                  </h2>
                  <div 
                    id="faq2" 
                    className="accordion-collapse collapse" 
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-muted">
                      Да, мы предлагаем онлайн-формат обучения с интерактивными вебинарами, 
                      практическими заданиями и поддержкой куратора в чате.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq4"
                    >
                      Как оплатить обучение?
                    </button>
                  </h2>
                  <div
                    id="faq4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-muted">
                      Мы принимаем безналичную оплату от юридических лиц с НДС и без НДС.
                      Также возможна оплата по договору. Предоставляем полный пакет
                      закрывающих документов.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacts;
