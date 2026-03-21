import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function About() {
  const values = [
    {
      icon: '🎯',
      title: 'Фокус на результате',
      description: 'Мы не просто учим — мы помогаем внедрить полученные знания в работу'
    },
    {
      icon: '🔄',
      title: 'Актуальность',
      description: 'Программы обновляются ежемесячно с учётом новых технологий'
    },
    {
      icon: '🤝',
      title: 'Партнёрство',
      description: 'Работаем с клиентами на долгосрочной основе, поддерживаем после обучения'
    },
    {
      icon: '💡',
      title: 'Инновации',
      description: 'Используем передовые методики и собственные разработки'
    }
  ];

  return (
    <div>
      {/* Hero секция */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="fw-bold mb-4">О компании AI Training Pro</h1>
              <p className="lead text-muted mb-4">
                Мы — команда экспертов по искусственному интеллекту, которая помогает
                компаниям освоить новые технологии и повысить эффективность бизнеса.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <div className="display-1">🏢</div>
              <div className="display-3 mt-4">👥</div>
              <div className="display-3">🎓</div>
            </div>
          </div>
        </div>
      </section>

      {/* Миссия */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-4">Наша миссия</h2>
              <p className="lead text-muted mb-4">
                Сделать технологии искусственного интеллекта доступными для каждой компании,
                чтобы бизнес мог использовать весь потенциал современных технологий.
              </p>
              <div className="row g-4 mt-4">
                <div className="col-md-4">
                  <div className="text-center">
                    <div className="display-4 mb-3">📈</div>
                    <h5 className="fw-bold">Повышение эффективности</h5>
                    <p className="text-muted small">
                      Наши выпускники автоматизируют до 40% рутинных задач
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <div className="display-4 mb-3">💰</div>
                    <h5 className="fw-bold">Экономия ресурсов</h5>
                    <p className="text-muted small">
                      Клиенты экономят до 30% бюджета на операционных расходах
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <div className="display-4 mb-3">🚀</div>
                    <h5 className="fw-bold">Рост инноваций</h5>
                    <p className="text-muted small">
                      70% компаний внедряют новые ИИ-решения после обучения
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ценности */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Наши ценности</h2>
            <p className="text-muted">Принципы, которыми мы руководствуемся</p>
          </div>
          <div className="row g-4">
            {values.map((value, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card feature-card h-100 p-4 shadow-sm text-center">
                  <div className="card-body">
                    <div className="display-4 mb-3">{value.icon}</div>
                    <h5 className="fw-bold">{value.title}</h5>
                    <p className="text-muted mb-0">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Клиенты */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Нам доверяют</h2>
            <p className="text-muted">Компании, которые уже прошли обучение</p>
          </div>
          <div className="row g-4">
            <div className="col-6 col-md-3">
              <div className="bg-white p-4 rounded text-center shadow-sm">
                <div className="display-4">🏦</div>
                <p className="text-muted small mb-0 mt-2">Финансовый сектор</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="bg-white p-4 rounded text-center shadow-sm">
                <div className="display-4">🛒</div>
                <p className="text-muted small mb-0 mt-2">Ритейл</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="bg-white p-4 rounded text-center shadow-sm">
                <div className="display-4">🏭</div>
                <p className="text-muted small mb-0 mt-2">Производство</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="bg-white p-4 rounded text-center shadow-sm">
                <div className="display-4">💊</div>
                <p className="text-muted small mb-0 mt-2">Фармацевтика</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Методология */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Наша методология</h2>
              <div className="mb-4">
                <h5 className="fw-bold">📚 Теория + Практика</h5>
                <p className="text-muted">
                  Минимум лекций, максимум практики. Каждый участник работает над 
                  реальными задачами своей компании.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold">🎯 Индивидуальный подход</h5>
                <p className="text-muted">
                  Адаптируем программу под уровень группы и специфику бизнеса.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold">📈 Измеримый результат</h5>
                <p className="text-muted">
                  Оцениваем прогресс до и после обучения, предоставляем отчёт 
                  с рекомендациями.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-light p-4 rounded">
                <h5 className="fw-bold mb-4">Этапы обучения</h5>
                <div className="d-flex mb-3">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ width: '40px', height: '40px' }}>1</div>
                  </div>
                  <div className="ms-3">
                    <h6 className="fw-bold mb-1">Диагностика</h6>
                    <p className="text-muted small mb-0">Оценка текущего уровня и потребностей</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ width: '40px', height: '40px' }}>2</div>
                  </div>
                  <div className="ms-3">
                    <h6 className="fw-bold mb-1">Программа</h6>
                    <p className="text-muted small mb-0">Разработка индивидуального плана обучения</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ width: '40px', height: '40px' }}>3</div>
                  </div>
                  <div className="ms-3">
                    <h6 className="fw-bold mb-1">Обучение</h6>
                    <p className="text-muted small mb-0">Проведение занятий с практикой</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ width: '40px', height: '40px' }}>4</div>
                  </div>
                  <div className="ms-3">
                    <h6 className="fw-bold mb-1">Поддержка</h6>
                    <p className="text-muted small mb-0">Помощь во внедрении полученных знаний</p>
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

export default About;
