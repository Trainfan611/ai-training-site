import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function Privacy() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="fw-bold mb-4">Политика конфиденциальности</h1>
          <p className="text-muted mb-5">Последнее обновление: 22 марта 2026 г.</p>

          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3">1. Общие положения</h2>
            <p className="text-muted">
              Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок 
              обработки и защиты персональных данных пользователей сайта AI Training Pro 
              (далее — «Сайт»), осуществляемой ИП Мартынов Д.А. (далее — «Оператор»).
            </p>
            <p className="text-muted">
              Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ 
              «О персональных данных».
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3">2. Сбор персональных данных</h2>
            <p className="text-muted">
              2.1. Оператор собирает следующие персональные данные Пользователя:
            </p>
            <ul className="text-muted">
              <li>Фамилия, имя, отчество</li>
              <li>Адрес электронной почты</li>
              <li>Номер телефона</li>
              <li>Наименование организации</li>
              <li>Должность</li>
            </ul>
            <p className="text-muted mt-3">
              2.2. Сбор данных осуществляется при регистрации на сайте, оформлении заявки 
              на обучение, подписке на рассылку.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3">3. Цели обработки данных</h2>
            <p className="text-muted">
              Персональные данные используются для следующих целей:
            </p>
            <ul className="text-muted">
              <li>Оказание услуг по обучению работе с ИИ</li>
              <li>Связь с Пользователем для уточнения деталей заказа</li>
              <li>Направление информационных материалов и новостей</li>
              <li>Выполнение требований законодательства РФ</li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3">4. Защита персональных данных</h2>
            <p className="text-muted">
              4.1. Оператор принимает необходимые технические и организационные меры для защиты 
              персональных данных от неправомерного доступа, уничтожения, изменения, блокирования, 
              копирования и распространения.
            </p>
            <p className="text-muted">
              4.2. Персональные данные хранятся на защищённых серверах с использованием 
              современных средств криптографической защиты.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3">5. Права пользователя</h2>
            <p className="text-muted">
              Пользователь имеет право:
            </p>
            <ul className="text-muted">
              <li>Получить информацию об обработке своих персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Защитить свои права в судебном порядке</li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3">6. Контакты</h2>
            <p className="text-muted">
              По вопросам, связанным с обработкой персональных данных, обращайтесь:
            </p>
            <div className="bg-light p-4 rounded">
              <p className="mb-2"><strong>ИП Мартынов Д.А.</strong></p>
              <p className="mb-2">Email: vlf.ru@yandex.ru</p>
              <p className="mb-0">Телефон: +7 (960) 505-16-22</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
