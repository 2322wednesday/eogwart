class PersonalTest {
    constructor(target) {
        this.container = document.querySelector(target); // 추후 dom 내용을 바꾸기 위한 선택자
        this.page = 0; // 0: intro, 1: test, 2: result 현재 페이지
        this.startTime = 0;
        this.endTime = 0;
        this.progress = 0; // 현재 질문 단계
        this.questions = {
            GHRS: [
                { question: '방심하는 사람들을 꾀어내는 향기가 나는 꽃이 당신을 유혹한다면 무슨 냄새가 날까?', answer: { a:'탁탁 소리를 내며 타는 장작불 냄새', b: '바다 냄새', c:'산뜻한 양피지 냄새', d:'고향의 집 냄새'}},
                { question: '당신 앞에 놓인 네 개의 음료수 중 어떤 것을 마시겠는가?', answer: { a:'다이아몬드라도 들어간 듯 반짝거리는 거품투성이의 은빛 액체', b: '초콜렛과 자두 냄새가 나는 미끈거리고 걸쭉한 진한 자줏빛 음료', c:'빛이 춤을 추듯 움직이고 엄청나게 눈부신 황금빛 액체', d:'환상을 보게 하는 향을 내뿜는 정체를 알 수 없는 까만 액체'}},
                { question: '당신 앞에 놓인 네 개의 박스 중 어떤 것을 열어보겠는가?', answer: { a:'내부에서 작은 생물이 찍찍대는 금으로 장식된 거북등무늬 상자', b: '신비한 룬 문자가 남겨진 은으로 장식된 반짝이는 새까만 상자', c:'견딜 수 없는 유혹의 비밀 정보가 담겨져 있다고 경고하는 문구가 써진 화려한 황금상자', d:'자격이 있는 사람한테만 열린다고 써진 수수하고 소박한 조그마한 백랍 상자'}},
                { question: '당신이 가장 듣기 좋아하는 악기 소리는?', answer: { a:'바이올린', b: '트럼펫', c:'피아노', d:'드럼'}},
                { question: '마법 정원에 들어가서 가장 먼저 살펴보고 싶은 것은?', answer: { a:'황금 사과가 열려있는 은백색 잎의 나무', b: '서로 재잘되는 것처럼 보이는 두툼한 빨간 독버섯', c:'한가운데에서 빛이 나는 액체가 소용돌이 치고 있는 웅덩이', d:'이상할 정도로 빛나는 눈을 가진 나이든 마법사의 조각상'}},
                { question: '어떤 머글이 다가와 당신이 마법사인 것을 확신한다고 말했을 때, 당신의 반응은?', answer: { a:'맞다고 하고 진짜인지 허세인지 궁금하게 만들고 떠난다', b: '왜 그렇게 생각하는지 묻는다', c:'그의 정신건강이 염려되니 의사에게 가보라고 말한다', d:'맞다고 하고 저주에 걸려보고 싶냐고 묻는다'}},
                { question: '늦은 밤 거리를 홀로 것던 당신은 마법과 관련된 것 같은 기이한 울음소리를 듣게 된다. 이때 당신의 선택은?', answer: { a:'지팡이를 한 손에 쥐고, 경계 태세를 하며 조심스레 걸어나간다', b: '지팡이를 꺼내들고 소리의 출처를 찾아본다', c:'지팡이를 꺼내들고 그 자리에 서서 맞선다', d:'문제 발생을 대비해 마음속으로 효과적 방어주문을 떠올리며 눈에 띄지 않는 곳으로 물러난다'}},
                { question: '당신이 가장 끌리는 길은?', answer: { a:'햇살이 내리쬐며 풀로 덮인 탁 트인 길', b: '등이 켜져있는 비좁고 어두운 골목', c:'구불구불하고 나뭇잎이 흩뿌려진 오솔길', d:'오래된 건물이 줄지어있는 자갈 깔린 거리'}},
                { question: '역사에 어떻게 알려지고 싶은가?', answer: { a:'현인', b: '선인', c:'위인', d:'용자'}},
                { question: '기회가 주어진다면, 나는 나에게 ___를 보장해줄 마법약을 발명하겠다.', answer: { a:'사랑', b: '명예', c:'지혜', d:'힘'}},
                { question: '다음 중 당신이 가장 연구해보고 싶은 것은?', answer: { a:'켄타우로스', b: '고블린, 트롤', c:'인어', d:'뱀파이어, 늑대인간'}},
                { question: '당신이 어떤 능력을 가질 수 있다면, 무엇을 선택하겠는가?', answer: { a:'마음을 읽을 수 있는 능력', b: '투명해질 수 있는 능력', c:'동물과 이야기할 수 있는 능력', d:'하늘을 날 수 있는 능력'}},
                { question: '나는 사람들이 나를 ___하면 좋겠다.', answer: { a:'부러워하면', b: '따라하려고 하면', c:'신뢰하면', d:'좋아하면'}},
            ]
        }; // 질문 모음
        this.results = []; // 사용자가 선택한 답모음
        this.responseTimes = {};
        this.resultInfors = {
            굴러온도르: {title:"박힌 돌들과 맞서는 용기를 보여주는 아이들은 누구나 다 가르치도록 하세", desc: "용기<br />대담성<br />결단력<br />기사도 정신"},
            훌라후프: {title:"나는 그 아이들을 훌라후프처럼 똑같이 돌릴 걸세", desc: "헌신<br />협동<br />인내<br />친절<br />관용"},
            레진치료: {title:"가장 충치가 없는 아이들만 가르치도록 하세", desc: "지혜<br />지식<br />지능<br />창의성<br />개성"},
            술이된인: {title:"가장 순수한 간을 지닌 아이들만 가르치도록 하세", desc: "지략<br />야망<br />교활<br />결단력<br />긍지<br />형제애"}
        }
        this.resultImages = {
            굴러온도르: './src/images/gul.png', // 'G' 결과에 대한 이미지 URL
            훌라후프: './src/images/hul.png', // 'H' 결과에 대한 이미지 URL
            레진치료: './src/images/rezin.png',   // 'R' 결과에 대한 이미지 URL
            술이된인: './src/images/sul.png'    // 'S' 결과에 대한 이미지 URL
        };        
        this.applyButton = this.container.querySelector('#applyButton');
        this.applyButton.addEventListener('click', this.submitApplication.bind(this));     
        this.init();
    }

    init() {
        this.questionArray = this.getQuestion(); // 질문을 배열로 저장
        const answerAButton = this.container.querySelector('button[data-answer="a"]');
        const answerBButton = this.container.querySelector('button[data-answer="b"]');
        const answerCButton = this.container.querySelector('button[data-answer="c"]');
        const answerDButton = this.container.querySelector('button[data-answer="d"]');
        const startButton = this.container.querySelector('button[data-action="start"]');
        const restartButton = this.container.querySelector('button[data-action="restart"]');

        answerAButton.addEventListener('click', () => this.submitAnswer(answerAButton.innerText));
        answerBButton.addEventListener('click', () => this.submitAnswer(answerBButton.innerText));
        answerCButton.addEventListener('click', () => this.submitAnswer(answerCButton.innerText));
        answerDButton.addEventListener('click', () => this.submitAnswer(answerDButton.innerText));
        startButton.addEventListener('click', this.start.bind(this));
        restartButton.addEventListener('click', this.restart.bind(this));

        this.render();
    }

    start() {
        if(this.progress !== 0) return; // 진행중이면 실행하지 않음

        this.page = 1;
        this.updateProgressBar();
        this.render();
    }

    restart() {
        this.page = 0;
        this.progress = 0;
        this.results = [];
        this.responseTimes = {};
        this.updateProgressBar();
        this.render();
    }

    getQuestion() { // questions의 키를 참조해서 질문을 반환
        return Object.entries(this.questions)
        .flatMap(([type, questions]) => questions.map(question => ({ ...question, type })));

        /*
        2023-05-19 리팩토링
        1. Object.entries를 사용하여 객체를 배열로 변환 후 이차원 배열을 flatMap으로 평탄화.
        */
    }

    getCurrentQuestions() { // 현재 progress의 질문을 반환
        const currentQuestionIndex = this.progress;
        return this.questionArray[currentQuestionIndex];

    }

    updateProgressBar() {
        const totalQuestions = 13; // 총 질문 수
        const progressPercentage = (this.progress / totalQuestions) * 100; // 진행 상태에 따른 백분율
        
        const progressBar = this.container.querySelector('.Progress'); // ProgressBar 선택
        if (progressBar) { // ProgressBar 요소가 존재하면
            progressBar.style.width = `${progressPercentage}%`; // 너비 업데이트
        }
    }
    
    submitAnswer(answer) {
        const currentQuestion = this.questionArray[this.progress];

        if (this.questionArray.length <= this.progress + 1) {
            this.page = 2;
            this.render();
        }

        const selectedAnswer = Object.keys(currentQuestion.answer)
        .find(selectedAnswer => currentQuestion.answer[selectedAnswer] === answer);

        this.finishAnswer(currentQuestion.type, selectedAnswer);
        this.progress++;
        this.updateProgressBar();
        this.render();
        return this.getCurrentQuestions();
    }

    submitApplication() {
        window.location.href = 'https://forms.gle/fYsbKe5mSeFUui9J8';
    }    

    // 사용자가 각 질문에 대해 응답하기 시작할 때의 시간을 기록하는 함수
    startAnswer() {
        this.startTime = Date.now(); // 현재 시간을 기록
    }
    // 사용자가 질문에 응답을 완료하고 다음 질문으로 넘어갈 때 호출되는 함수
    finishAnswer(questionType, answer) {
        const endTime = Date.now(); // 응답을 완료한 시간을 기록
        const responseTime = endTime - this.startTime; // 응답 시간을 계산
        console.log(responseTime);
        // 응답 시간을 저장
        if (!this.responseTimes[answer]) {
            this.responseTimes[answer] = [];
        }
        this.responseTimes[answer].push(responseTime);
        console.log(this.responseTimes)
        // 응답을 저장
        this.results.push({ type: questionType, answer: answer });
    }

    // 모든 질문에 대한 응답이 완료된 후 평균 응답 시간을 계산하는 함수
    calculateAverageResponseTimes() {
        const averageTimes = {};
        Object.keys(this.responseTimes).forEach(type => {
            const times = this.responseTimes[type];
            const averageTime = times.reduce((acc, cur) => acc + cur, 0) / times.length;
            averageTimes[type] = averageTime;
        });
        return averageTimes;
    }
    calcResult() {
        const totalResult = Object.keys(this.questions).reduce((acc, cur) => {
            acc[cur] = this.results
                .filter(result => result.type === cur)
                .reduce((acc, cur) => {
                acc[cur.answer] = acc[cur.answer] ? acc[cur.answer] + 1 : 1;
                return acc;
            }, {});
            return acc;
        }, {});
        const averageResponseTimes = this.calculateAverageResponseTimes(); // 평균 응답 시간을 계산
        return this.createPersonalResult(totalResult, averageResponseTimes);
    }

    createPersonalResult(totalResult, averageResponseTimes) {
        const maxResponseTime = 300000;
        console.log(averageResponseTimes);
        const weights = {
            a: 1 / Math.min(averageResponseTimes.a || maxResponseTime, maxResponseTime),
            b: 1 / Math.min(averageResponseTimes.b || maxResponseTime, maxResponseTime),
            c: 1 / Math.min(averageResponseTimes.c || maxResponseTime, maxResponseTime),
            d: 1 / Math.min(averageResponseTimes.d || maxResponseTime, maxResponseTime),
        };
        console.log(weights);
        let weightedResults = {
            굴러온도르: 0,
            훌라후프: 0,
            레진치료: 0,
            술이된인: 0
        };
    
        Object.keys(totalResult).forEach(type => {
            const result = totalResult[type];
            // 각 결과 유형에 대한 가중치 적용
            const weightedResult = {
                a: (result.a || 0) * weights.a,
                b: (result.b || 0) * weights.b,
                c: (result.c || 0) * weights.c,
                d: (result.d || 0) * weights.d,
            };
    
            // 각 기숙사 점수 업데이트
            weightedResults['굴러온도르'] += weightedResult.a;
            weightedResults['훌라후프'] += weightedResult.b;
            weightedResults['레진치료'] += weightedResult.c;
            weightedResults['술이된인'] += weightedResult.d;
        });
        console.log(weightedResults);
        // 총 점수를 기반으로 각 기숙사 적합도 계산
        const totalScores = Object.values(weightedResults).reduce((acc, score) => acc + score, 0);
        Object.keys(weightedResults).forEach(house => {
            weightedResults[house] = (weightedResults[house] / totalScores * 100).toFixed(2);
        });
    
        // 가장 높은 점수의 기숙사 찾기
        const maxHouse = Object.keys(weightedResults).reduce((a, b) => weightedResults[a] > weightedResults[b] ? a : b);
    
        // 결과 반환
        return { maxHouse, weightedResults };
    }  

    drawResultsChart(weightedResults) {
        const canvas = this.container.querySelector('#resultChart');
        const ctx = canvas.getContext('2d');
    
        // 캔버스를 비웁니다.
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        const labels = Object.keys(weightedResults);
        const data = Object.values(weightedResults).map(value => parseFloat(value));
        const barWidth = 50;
        const barSpacing = 30;
        const maxBarHeight = 150; // 바 차트의 최대 높이
        const maxValue = Math.max(...data);
    
        // 바 색상 정의
        const barColors = ['#800020', '#FFD700', '#000080', '#008000']; // 버건디, 노란색, 남색, 초록색
    
        // 각 바를 그립니다.
        labels.forEach((label, index) => {
            const barHeight = (data[index] / maxValue) * maxBarHeight;
            const x = (index * (barWidth + barSpacing)) + barSpacing;
            const y = canvas.height - barHeight;
    
            // 바 그리기
            ctx.fillStyle = barColors[index]; // 바의 색
            ctx.fillRect(x, canvas.height - barHeight - 20, barWidth, barHeight);
    
            // 라벨 표시
            ctx.fillStyle = '#FFF'; // 텍스트 색
            ctx.textAlign = 'center';
            ctx.fillText(labels[index], x + (barWidth / 2), canvas.height - 5); // 기숙사 이름 표시
            console.log(labels[index]);
            // 값 표시
            ctx.fillText(`${data[index]}%`, x + (barWidth / 2), y - 5); // 바 위에 퍼센테이지 표시
        });
    }
    
    

    render() {
        const introContainer = this.container.querySelector('.intro_container');
        const testContainer = this.container.querySelector('.test_container');
        const resultContainer = this.container.querySelector('.result_container');
        const analysisContainer = this.container.querySelector('.analysis_container');

        if (this.page === 0) {
            introContainer.classList.add('active');
            testContainer.classList.remove('active');
            resultContainer.classList.remove('active');
            analysisContainer.classList.remove('active');

        } else if (this.page === 1) {
            this.startAnswer();
            testContainer.classList.add('active');
            introContainer.classList.remove('active');
            resultContainer.classList.remove('active');
            analysisContainer.classList.remove('active');

            const progressElement = this.container.querySelector('.progress');
            const progressBarElement = this.container.querySelector('.now');
            const questionElement = this.container.querySelector('.question');
            const answerAElement = this.container.querySelector('button[data-answer="a"]');
            const answerBElement = this.container.querySelector('button[data-answer="b"]');
            const answerCElement = this.container.querySelector('button[data-answer="c"]');
            const answerDElement = this.container.querySelector('button[data-answer="d"]');
        
            progressElement.textContent = `Q${this.progress + 1}. `;
            progressBarElement.textContent = `${this.progress + 1}`;
            questionElement.textContent = this.getCurrentQuestions().question;
            answerAElement.textContent = this.getCurrentQuestions().answer.a;
            answerBElement.textContent = this.getCurrentQuestions().answer.b;
            answerCElement.textContent = this.getCurrentQuestions().answer.c;
            answerDElement.textContent = this.getCurrentQuestions().answer.d;

        } else if (this.page === 2) {
            analysisContainer.classList.add('active');
            introContainer.classList.remove('active');
            testContainer.classList.remove('active');
            resultContainer.classList.remove('active');
        
            // 3초 후에 결과 페이지를 표시
            setTimeout(() => {
                analysisContainer.classList.remove('active'); // 분석 페이지 비활성화
                resultContainer.classList.add('active');
        
                const { maxHouse, weightedResults } = this.calcResult(); // 결과 계산
                const resultTextElement = this.container.querySelector('.result_text');
                const resultInforTitleElement = this.container.querySelector('.result_infor_title');
                const resultInforElement = this.container.querySelector('.result_infor');
                const resultInforImg = this.container.querySelector('.result_img');

                resultInforImg.src = this.resultImages[maxHouse];
                resultTextElement.innerHTML = `당신의 기숙사는 <span class="point_text">${maxHouse}</span>입니다.`;
                resultInforTitleElement.innerHTML = `[ ${this.resultInfors[maxHouse].title} ]`;
                resultInforElement.innerHTML = this.resultInfors[maxHouse].desc
                    .split('<br />')
                    .map(el => `<li>${el}</li>`)
                    .join('');
                this.drawResultsChart(weightedResults);
            }, 3000); // 3000ms = 3초
        }
        
    }
}
