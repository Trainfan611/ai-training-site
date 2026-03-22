import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Обучение сотрудников работе с ИИ
              </h1>
              <p className="lead mb-4">
                Помогаем компаниям внедрять искусственный интеллект в бизнес-процессы.
                Практические навыки для вашей команды уже через 2 недели.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/services" className="btn btn-light btn-lg px-4">
                  Смотреть программы
                </Link>
                <Link to="/contacts" className="btn btn-outline-light btn-lg px-4">
                  Бесплатная консультация
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center d-none d-lg-block">
              <div className="display-1">🤖</div>
              <div className="display-1 mt-3">📚</div>
              <div className="display-1 mt-3">💼</div>
            </div>
          </div>
        </div>
      </section>

      {/* Программы обучения */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Наши программы</h2>
            <p className="text-muted">Выберите подходящий формат обучения</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card service-card h-100 shadow-sm">
                <div className="card-body p-4">
                  <div className="display-4 mb-3">💻</div>
                  <h5 className="fw-bold">Базовый курс</h5>
                  <p className="text-muted">
                    Основы работы с ИИ для сотрудников любого уровня
                  </p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">✓ Введение в нейросети</li>
                    <li className="mb-2">✓ ChatGPT и аналоги</li>
                    <li className="mb-2">✓ Генерация изображений</li>
                    <li className="mb-2">✓ 3 дня по 4 часа</li>
                  </ul>
                </div>
                <div className="card-footer bg-white border-0 p-4 pt-0">
                  <Link to="/services" className="btn btn-outline-primary w-100">
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100 shadow-sm">
                <div className="card-body p-4">
                  <div className="display-4 mb-3">🚀</div>
                  <h5 className="fw-bold">Продвинутый уровень</h5>
                  <p className="text-muted">
                    Глубокое погружение для специалистов и руководителей
                  </p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">✓ Промпт-инжиниринг</li>
                    <li className="mb-2">✓ Автоматизация процессов</li>
                    <li className="mb-2">✓ Интеграция ИИ в работу</li>
                    <li className="mb-2">✓ 5 дней по 6 часов</li>
                  </ul>
                </div>
                <div className="card-footer bg-white border-0 p-4 pt-0">
                  <Link to="/services" className="btn btn-outline-primary w-100">
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100 shadow-sm">
                <div className="card-body p-4">
                  <div className="display-4 mb-3">🏢</div>
                  <h5 className="fw-bold">Корпоративный тренинг</h5>
                  <p className="text-muted">
                    Индивидуальная программа для вашей команды
                  </p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">✓ Анализ бизнес-процессов</li>
                    <li className="mb-2">✓ Кейсы вашей компании</li>
                    <li className="mb-2">✓ Пост-поддержка</li>
                    <li className="mb-2">✓ Индивидуальный график</li>
                  </ul>
                </div>
                <div className="card-footer bg-white border-0 p-4 pt-0">
                  <Link to="/services" className="btn btn-outline-primary w-100">
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-5 bg-primary text-white">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">Готовы начать обучение?</h2>
              <p className="lead mb-0">
                Оставьте заявку и получите бесплатную консультацию по подбору программы
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <Link to="/contacts" className="btn btn-light btn-lg px-5">
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
