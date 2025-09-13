import readline from 'readline';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function displayMenu() {
  console.log('\n=== Работа с экзаменами ===');
  console.log('1. Показать все экзамены');
  console.log('2. Добавить экзамен');
  console.log('3. Найти экзамен по ID');
  console.log('4. Обновить данные экзамена');
  console.log('5. Удалить экзамен');
  console.log('6. Показать преподавателей экзамена');
  console.log('0. Вернуться в главное меню');
}

async function getAllExams() {
  try {
    const response = await axios.get(`${API_URL}/exams`);
    console.log('\nСписок экзаменов:');
    response.data.forEach((exam: any) => {
      console.log(`ID: ${exam.id}`);
      console.log(`Предмет: ${exam.subject}`);
      console.log(`Дата: ${exam.date}`);
      console.log(`Оценка: ${exam.score}`);
      console.log(`ID абитуриента: ${exam.abiturientId || 'Не назначен'}`);
      console.log(`ID преподавателя: ${exam.teacherId || 'Не назначен'}`);
      console.log('---');
    });
  } catch (error) {
    console.error('Ошибка при получении списка экзаменов');
  }
}

async function createExam() {
  rl.question('Введите предмет: ', (subject) => {
    rl.question('Введите дату (YYYY-MM-DD): ', (date) => {
      rl.question('Введите оценку: ', (score) => {
        rl.question('Введите ID абитуриента (оставьте пустым, если нет): ', (abiturientId) => {
          rl.question('Введите ID преподавателя (оставьте пустым, если нет): ', async (teacherId) => {
            try {
              const response = await axios.post(`${API_URL}/exams`, {
                subject,
                date,
                score: parseInt(score),
                abiturientId: abiturientId || null,
                teacherId: teacherId || null
              });
              console.log('\nЭкзамен успешно добавлен:');
              console.log(`ID: ${response.data.id}`);
              console.log(`Предмет: ${response.data.subject}`);
              console.log(`Дата: ${response.data.date}`);
              console.log(`Оценка: ${response.data.score}`);
              console.log(`ID абитуриента: ${response.data.abiturientId || 'Не назначен'}`);
              console.log(`ID преподавателя: ${response.data.teacherId || 'Не назначен'}`);
            } catch (error) {
              console.error('Ошибка при создании экзамена');
            }
            main();
          });
        });
      });
    });
  });
}

async function getExamById() {
  rl.question('Введите ID экзамена: ', async (id) => {
    try {
      const response = await axios.get(`${API_URL}/exams/${id}`);
      const exam = response.data;
      console.log('\nДанные экзамена:');
      console.log(`ID: ${exam.id}`);
      console.log(`Предмет: ${exam.subject}`);
      console.log(`Дата: ${exam.date}`);
      console.log(`Оценка: ${exam.score}`);
      console.log(`ID абитуриента: ${exam.abiturientId || 'Не назначен'}`);
      console.log(`ID преподавателя: ${exam.teacherId || 'Не назначен'}`);
    } catch (error) {
      console.error('Экзамен не найден');
    }
    main();
  });
}

async function updateExam() {
  rl.question('Введите ID экзамена: ', (id) => {
    rl.question('Введите новый предмет (оставьте пустым, чтобы не менять): ', (subject) => {
      rl.question('Введите новую дату (оставьте пустым, чтобы не менять): ', (date) => {
        rl.question('Введите новую оценку (оставьте пустым, чтобы не менять): ', (score) => {
          rl.question('Введите новый ID абитуриента (оставьте пустым, чтобы не менять): ', (abiturientId) => {
            rl.question('Введите новый ID преподавателя (оставьте пустым, чтобы не менять): ', async (teacherId) => {
              try {
                const updateData: any = {};
                if (subject) updateData.subject = subject;
                if (date) updateData.date = date;
                if (score) updateData.score = parseInt(score);
                if (abiturientId) updateData.abiturientId = abiturientId;
                if (teacherId) updateData.teacherId = teacherId;

                const response = await axios.put(`${API_URL}/exams/${id}`, updateData);
                console.log('\nДанные экзамена обновлены:');
                console.log(`ID: ${response.data.id}`);
                console.log(`Предмет: ${response.data.subject}`);
                console.log(`Дата: ${response.data.date}`);
                console.log(`Оценка: ${response.data.score}`);
                console.log(`ID абитуриента: ${response.data.abiturientId || 'Не назначен'}`);
                console.log(`ID преподавателя: ${response.data.teacherId || 'Не назначен'}`);
              } catch (error) {
                console.error('Ошибка при обновлении данных экзамена');
              }
              main();
            });
          });
        });
      });
    });
  });
}

async function deleteExam() {
  rl.question('Введите ID экзамена: ', async (id) => {
    try {
      await axios.delete(`${API_URL}/exams/${id}`);
      console.log('\nЭкзамен успешно удален');
    } catch (error) {
      console.error('Ошибка при удалении экзамена');
    }
    main();
  });
}

async function getExamTeachers() {
  rl.question('Введите ID экзамена: ', async (id) => {
    try {
      const response = await axios.get(`${API_URL}/exams/${id}/teachers`);
      console.log('\nПреподаватели экзамена:');
      response.data.forEach((teacher: any) => {
        console.log(`ID: ${teacher.id}`);
        console.log(`Имя: ${teacher.firstName}`);
        console.log(`Фамилия: ${teacher.lastName}`);
        console.log(`Степень: ${teacher.degree}`);
        console.log('---');
      });
    } catch (error) {
      console.error('Ошибка при получении преподавателей экзамена');
    }
    main();
  });
}

async function main() {
  await displayMenu();
  rl.question('Выберите действие: ', async (answer) => {
    switch (answer) {
      case '1':
        await getAllExams();
        main();
        break;
      case '2':
        await createExam();
        break;
      case '3':
        await getExamById();
        break;
      case '4':
        await updateExam();
        break;
      case '5':
        await deleteExam();
        break;
      case '6':
        await getExamTeachers();
        break;
      case '0':
        rl.close();
        process.exit(0);
        break;
      default:
        console.log('Неверный выбор');
        main();
    }
  });
}

// Запуск CLI
console.log('Добро пожаловать в систему управления экзаменами!');
main();
