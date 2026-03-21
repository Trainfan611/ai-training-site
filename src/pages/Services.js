import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function Services() {
  const [showModal, setShowModal] = useState(false);

  const services = [
    {
      icon: '💻',
      title: 'Базовый курс',
      description: 'Основы работы с ИИ для сотрудников любого уровня',
      duration: '3 дня по 4 часа',
      price: '49 000 ₽',
      features: [
        'Введение в нейросети и ИИ',
        'Работа с ChatGPT и аналогами',
        'Генерация изображений и текста',
        'Основы промпт-инжиниринга',
        'Практические задания'
      ]
    },
    {
      icon: '🚀',
      title: 'Продвинутый уровень',
      description: 'Глубокое погружение для специалистов и руководителей',
      duration: '5 дней по 6 часов',
      price: '89 000 ₽',
      features: [
        'Продвинутый промпт-инжиниринг',
        'Автоматизация рабочих процессов',
        'Интеграция ИИ в бизнес-задачи',
        'Работа с API нейросетей',
        'Создание собственных решений'
      ],
      popular: true
    },
    {
      icon: '🏢',
      title: 'Корпоративный тренинг',
      description: 'Индивидуальная программа для вашей команды',
      duration: 'По согласованию',
      price: 'от 150 000 ₽',
      features: [
        'Анализ бизнес-процессов',
        'Индивидуальная программа',
        'Кейсы вашей компании',
        'Работа в группах',
        'Пост-поддержка 1 месяц'
      ]
    },
    {
      icon: '🎓',
      title: 'Мастер-класс',
      description: 'Интенсивное обучение по конкретной теме',
      duration: '1 день, 8 часов',
      price: '29 000 ₽',
      features: [
        'Выбор специализации',
        'Работа с конкретным инструментом',
        'Разбор реальных кейсов',
        'Готовые решения',
        'Материалы и шаблоны'
      ]
    },
    {
      icon: '📊',
      title: 'ИИ-консалтинг',
      description: 'Внедрение ИИ в бизнес-процессы компании',
      duration: 'Индивидуально',
      price: 'от 100 000 ₽',
      features: [
        'Аудит текущих процессов',
        'Подбор ИИ-решений',
        'План внедрения',
        'Обучение команды',
        'Техническая поддержка',
        'Отчёт с рекомендациями'
      ]
    },
    {
      icon: '🌐',
      title: 'Онлайн-курс',
      description: 'Дистанционное обучение в удобном темпе',
      duration: '2 недели доступа',
      price: '19 000 ₽',
      features: [
        'Видеоуроки в записи',
        'Практические задания',
        'Чат с куратором',
        'Проверка домашних работ',
        'Доступ к материалам'
      ]
    }
  ];

  return (
    <div>
      {/* Заголовок */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="fw-bold mb-3">Программы обучения</h1>
              <p className="lead text-muted mb-4">
                Выберите подходящий формат обучения для вашей команды.
                Все программы можно адаптировать под ваши задачи.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Карточки услуг */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={`card pricing-card h-100 shadow-sm ${service.popular ? 'popular' : ''}`}>
                  {service.popular && (
                    <div className="badge bg-primary position-absolute top-0 start-50 translate-middle">
                      Популярный выбор
                    </div>
                  )}
                  <div className="card-body p-4">
                    <div className="text-center mb-4">
                      <div className="display-3 mb-3">{service.icon}</div>
                      <h4 className="fw-bold">{service.title}</h4>
                      <p className="text-muted">{service.description}</p>
                    </div>
                    <div className="text-center mb-4">
                      <div className="display-5 fw-bold text-gradient">{service.price}</div>
                      <div className="text-muted">{service.duration}</div>
                    </div>
                    <hr />
                    <ul className="list-unstyled">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="mb-2 d-flex align-items-start">
                          <span className="text-success me-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-footer bg-white border-0 p-4 pt-0">
                    <button className="btn btn-primary w-100" onClick={() => setShowModal(true)}>
                      Заказать
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Сравнение форматов */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Сравнение форматов</h2>
            <p className="text-muted">Поможем выбрать оптимальный вариант</p>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered bg-white">
              <thead className="table-primary">
                <tr>
                  <th>Формат</th>
                  <th>Группы</th>
                  <th>Практика</th>
                  <th>Поддержка</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Базовый курс</strong></td>
                  <td>до 15 чел</td>
                  <td>60%</td>
                  <td>Во время курса</td>
                </tr>
                <tr>
                  <td><strong>Продвинутый уровень</strong></td>
                  <td>до 10 чел</td>
                  <td>80%</td>
                  <td>2 недели после</td>
                </tr>
                <tr>
                  <td><strong>Корпоративный тренинг</strong></td>
                  <td>Индивидуально</td>
                  <td>90%</td>
                  <td>1 месяц</td>
                </tr>
                <tr>
                  <td><strong>Онлайн-курс</strong></td>
                  <td>Самообучение</td>
                  <td>50%</td>
                  <td>Чат с куратором</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-3">Нужна помощь с выбором?</h2>
              <p className="lead text-muted mb-4">
                Наши специалисты помогут подобрать оптимальную программу обучения
                с учётом специфики вашего бизнеса и уровня подготовки сотрудников.
              </p>
              <Link to="/contacts" className="btn btn-primary btn-lg px-5">
                Получить консультацию
              </Link>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}

export default Services;
