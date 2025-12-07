// 导航功能
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.getAttribute('data-section');
            
            // 隐藏所有章节
            sections.forEach(section => {
                section.classList.remove('section-active');
                section.classList.add('section-hidden');
            });
            
            // 显示目标章节
            const target = document.getElementById(targetSection);
            if (target) {
                target.classList.remove('section-hidden');
                target.classList.add('section-active');
                
                // 平滑滚动到顶部
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
}

// 图片识别游戏
function initImageRecognition() {
    const imageCards = document.querySelectorAll('.image-card');
    const resultDiv = document.getElementById('recognition-result');
    const resultEmoji = document.getElementById('result-emoji');
    const resultText = document.getElementById('result-text');
    const resultDetail = document.getElementById('result-detail');
    
    if (!resultDiv || !resultEmoji || !resultText || !resultDetail) return;
    if (imageCards.length === 0) return;

    const responses = {
        '小猫': {
            emoji: '🐱',
            text: 'AI识别结果：这是一只小猫！',
            detail: 'AI看到了：尖尖的耳朵、圆圆的眼睛、柔软的毛发。置信度：95%'
        },
        '小狗': {
            emoji: '🐶',
            text: 'AI识别结果：这是一只小狗！',
            detail: 'AI看到了：可爱的鼻子、摇摆的尾巴、忠诚的眼神。置信度：93%'
        },
        '汽车': {
            emoji: '🚗',
            text: 'AI识别结果：这是一辆汽车！',
            detail: 'AI看到了：四个轮子、车窗、车灯和流线型的车身。置信度：97%'
        },
        '飞机': {
            emoji: '✈️',
            text: 'AI识别结果：这是一架飞机！',
            detail: 'AI看到了：机翼、机身、尾翼和发动机。置信度：96%'
        },
        '熊猫': {
            emoji: '🐼',
            text: 'AI识别结果：这是一只熊猫！',
            detail: 'AI看到了：黑白相间的毛色、圆圆的脸、黑眼圈。置信度：98%'
        },
        '苹果': {
            emoji: '🍎',
            text: 'AI识别结果：这是一个苹果！',
            detail: 'AI看到了：圆形、红色、光滑的表面、果柄。置信度：94%'
        },
        '自行车': {
            emoji: '🚲',
            text: 'AI识别结果：这是一辆自行车！',
            detail: 'AI看到了：两个轮子、车把、脚踏板、车座。置信度：96%'
        },
        '花朵': {
            emoji: '🌸',
            text: 'AI识别结果：这是一朵花！',
            detail: 'AI看到了：花瓣、花蕊、鲜艳的颜色、美丽的形状。置信度：92%'
        }
    };

    imageCards.forEach(card => {
        card.addEventListener('click', () => {
            const answer = card.getAttribute('data-answer');
            const response = responses[answer];
            
            // 添加点击动画
            card.classList.add('shake-animation');
            setTimeout(() => {
                card.classList.remove('shake-animation');
            }, 500);
            
            // 模拟AI思考延迟
            resultDiv.classList.remove('hidden');
            resultEmoji.textContent = '🤔';
            resultText.textContent = 'AI正在思考中...';
            resultDetail.textContent = '分析图片特征...';
            
            setTimeout(() => {
                resultEmoji.textContent = response.emoji;
                resultText.textContent = response.text;
                resultDetail.textContent = response.detail;
                
                // 添加脉冲动画
                resultDiv.classList.add('pulse-animation');
                setTimeout(() => {
                    resultDiv.classList.remove('pulse-animation');
                }, 2000);
            }, 1500);
        });
    });
}

// AI对话游戏
function initChatGame() {
    const questionButtons = document.querySelectorAll('.question-btn');
    const chatResponse = document.getElementById('chat-response');
    
    if (!chatResponse) return;
    if (questionButtons.length === 0) return;

    const responses = {
        '你好，AI！你是谁？': {
            text: '你好呀，小朋友！👋\n\n我是一个人工智能助手，你可以叫我AI小助手。我是通过学习很多很多的知识和对话训练出来的。\n\n就像你在学校学习一样，我也在不断学习新的知识！我最喜欢和小朋友们聊天，回答你们的问题啦！😊',
            emoji: '🤖'
        },
        '你能帮我做什么？': {
            text: '我能帮你做很多事情呢！✨\n\n📚 回答你的问题\n🎨 帮你认识新事物\n💡 给你讲有趣的知识\n🎮 陪你玩游戏\n📖 给你讲故事\n\n只要你问我，我都会尽力帮助你！不过，做作业还是要靠你自己动脑筋哦！💪',
            emoji: '🌟'
        },
        '为什么天空是蓝色的？': {
            text: '这是个很棒的问题！🌈\n\n天空是蓝色的，是因为太阳光的魔法！☀️\n\n太阳光其实包含了彩虹的所有颜色。当阳光穿过空气时，蓝色的光最容易被空气中的小颗粒散射到四面八方。\n\n所以我们抬头看天空，就看到了蓝色！\n\n到了傍晚，太阳光要穿过更多的空气，红色和橙色的光就散射出来了，所以晚霞是红色的！🌅',
            emoji: '🔵'
        },
        '给我讲个笑话吧！': {
            text: '好呀！听好了：😄\n\n小明问老师："老师，为什么电脑会感冒？"\n\n老师说："因为它开了太多窗口（Windows）！"\n\n哈哈哈！😂\n\n再来一个：\n\n问：为什么AI不会累？\n答：因为它有"电"力十足的精神！⚡\n\n你笑了吗？😊',
            emoji: '😄'
        },
        '恐龙为什么灭绝了？': {
            text: '这是一个超级有趣的问题！🦕\n\n大约6500万年前，一颗巨大的小行星撞击了地球！💥\n\n这次撞击引起了：\n🌋 火山爆发\n🌪️ 巨大的尘埃遮住了太阳\n❄️ 地球变得非常寒冷\n🌱 植物无法生长\n\n恐龙没有足够的食物，慢慢就灭绝了。\n\n但是！有些小型恐龙进化成了今天的鸟类！所以你看到的小鸟，其实是恐龙的后代哦！🐦',
            emoji: '🦖'
        },
        '为什么会下雨？': {
            text: '让我告诉你下雨的秘密！🌧️\n\n1️⃣ 太阳把地面的水变成水蒸气（就像烧开水时冒出的白气）☀️💧\n\n2️⃣ 水蒸气飘到天上，遇到冷空气就变成小水滴，聚在一起形成云朵☁️\n\n3️⃣ 云朵里的小水滴越来越多、越来越重\n\n4️⃣ 当它们重到云朵托不住时，就掉下来了——这就是下雨！🌧️\n\n所以下雨其实是水在天空和地面之间旅行呢！',
            emoji: '☔'
        },
        '太阳有多大？': {
            text: '太阳真的超级超级大！☀️\n\n🌍 如果地球是一个乒乓球，那太阳就是一个直径2米多的大球！\n\n📏 太阳的直径约140万公里，是地球的109倍！\n\n⚖️ 太阳的重量是地球的33万倍！\n\n🎈 如果太阳是空心的，可以装下130万个地球！\n\n🔥 太阳表面温度约6000度，中心温度高达1500万度！\n\n太阳就像一个巨大的火球，给我们带来光和热！',
            emoji: '🌞'
        },
        '我怎样才能学好数学？': {
            text: '学好数学的秘诀来啦！📐✨\n\n1️⃣ **多练习**：就像玩游戏一样，练得越多越厉害！每天做几道题，坚持下去！💪\n\n2️⃣ **理解原理**：不要死记硬背，要明白"为什么"。问问老师和爸爸妈妈！🤔\n\n3️⃣ **生活中用数学**：买东西算钱、分蛋糕、看时间，到处都是数学！🛒🍰⏰\n\n4️⃣ **不怕错误**：做错了没关系，错误是最好的老师！找出错在哪里，下次就不会错了！✅\n\n5️⃣ **保持兴趣**：把数学当成解谜游戏，会很有趣哦！🎮\n\n相信自己，你一定能学好数学！',
            emoji: '📚'
        }
    };

    questionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const question = button.getAttribute('data-question');
            const response = responses[question];
            
            // 添加点击动画
            button.classList.add('shake-animation');
            setTimeout(() => {
                button.classList.remove('shake-animation');
            }, 500);
            
            // 显示思考状态
            chatResponse.innerHTML = `
                <div class="text-center text-purple-600 mt-20">
                    <div class="text-5xl mb-3 pulse-animation">🤔</div>
                    <div class="text-lg font-bold">AI正在思考...</div>
                </div>
            `;
            
            // 模拟AI思考延迟
            setTimeout(() => {
                chatResponse.innerHTML = `
                    <div class="space-y-4">
                        <div class="bg-purple-100 rounded-lg p-4 inline-block">
                            <div class="font-bold text-purple-600 mb-2">你的问题：</div>
                            <div class="text-gray-700">${question}</div>
                        </div>
                        <div class="bg-green-100 rounded-lg p-4">
                            <div class="flex items-start mb-2">
                                <div class="text-3xl mr-3">${response.emoji}</div>
                                <div class="font-bold text-green-600">AI的回答：</div>
                            </div>
                            <div class="text-gray-700 whitespace-pre-line leading-relaxed">${response.text}</div>
                        </div>
                    </div>
                `;
            }, 1500);
        });
    });
}

// AI音乐节奏游戏
function initRhythmGame() {
    const playBtn = document.getElementById('play-rhythm');
    const tapBtn = document.getElementById('tap-button');
    const clearBtn = document.getElementById('clear-rhythm');
    const checkBtn = document.getElementById('check-rhythm');
    const difficultyBtns = document.querySelectorAll('.difficulty-btn');
    const aiDisplay = document.getElementById('ai-rhythm-display');
    const playerDisplay = document.getElementById('player-rhythm-display');
    const resultDiv = document.getElementById('rhythm-result');
    const resultEmoji = document.getElementById('rhythm-emoji');
    const resultText = document.getElementById('rhythm-text');
    const resultDetail = document.getElementById('rhythm-detail');
    const resultScore = document.getElementById('rhythm-score');
    
    if (!playBtn || !tapBtn || !clearBtn || !checkBtn || !aiDisplay || !playerDisplay || !resultDiv) return;

    let currentDifficulty = 'easy';
    let aiRhythm = [];
    let playerRhythm = [];
    let isPlaying = false;
    let lastTapTime = 0;

    // 节奏模式库
    const rhythmPatterns = {
        easy: [
            [500, 500, 500, 500],  // 均匀四拍
            [400, 400, 800],        // 快快慢
            [800, 400, 400]         // 慢快快
        ],
        medium: [
            [300, 300, 300, 600],   // 快快快慢
            [600, 300, 300, 300],   // 慢快快快
            [400, 200, 400, 400]    // 中快中中
        ],
        hard: [
            [200, 200, 400, 200, 400], // 快快中快中
            [300, 150, 300, 150, 600], // 中快中快慢
            [150, 150, 300, 300, 600]  // 快快中中慢
        ]
    };

    // 选择难度
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            difficultyBtns.forEach(b => b.classList.remove('ring-4', 'ring-white'));
            btn.classList.add('ring-4', 'ring-white');
            currentDifficulty = btn.getAttribute('data-difficulty');
            
            // 清空之前的节奏
            aiRhythm = [];
            playerRhythm = [];
            aiDisplay.innerHTML = '';
            playerDisplay.innerHTML = '';
            resultDiv.classList.add('hidden');
        });
    });

    // 播放AI节奏
    playBtn.addEventListener('click', async () => {
        if (isPlaying) return;
        isPlaying = true;
        playBtn.disabled = true;
        
        // 随机选择一个节奏模式
        const patterns = rhythmPatterns[currentDifficulty];
        const pattern = patterns[Math.floor(Math.random() * patterns.length)];
        aiRhythm = pattern;
        
        // 清空显示
        aiDisplay.innerHTML = '<div class="text-gray-500 text-sm">正在播放...</div>';
        playerDisplay.innerHTML = '';
        playerRhythm = [];
        resultDiv.classList.add('hidden');
        
        // 播放节奏（视觉效果）
        aiDisplay.innerHTML = '';
        for (let i = 0; i < pattern.length; i++) {
            // 添加节拍指示器
            const beat = document.createElement('div');
            beat.className = 'w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg transform scale-0 transition-transform';
            beat.textContent = i + 1;
            aiDisplay.appendChild(beat);
            
            // 动画效果
            setTimeout(() => {
                beat.classList.remove('scale-0');
                beat.classList.add('scale-110');
                
                // 播放音效（使用Web Audio API）
                playBeep(440, 100);
                
                setTimeout(() => {
                    beat.classList.remove('scale-110');
                    beat.classList.add('scale-100');
                }, 100);
            }, pattern.slice(0, i).reduce((a, b) => a + b, 0));
        }
        
        // 播放完成
        setTimeout(() => {
            isPlaying = false;
            playBtn.disabled = false;
            aiDisplay.innerHTML = '';
            
            // 显示节拍数
            for (let i = 0; i < pattern.length; i++) {
                const beat = document.createElement('div');
                beat.className = 'w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center text-purple-700 font-bold';
                beat.textContent = i + 1;
                aiDisplay.appendChild(beat);
            }
        }, pattern.reduce((a, b) => a + b, 0) + 500);
    });

    // 玩家打节奏
    tapBtn.addEventListener('click', () => {
        if (aiRhythm.length === 0) {
            alert('请先播放AI的节奏！');
            return;
        }
        
        const currentTime = Date.now();
        
        if (lastTapTime === 0) {
            // 第一次点击
            lastTapTime = currentTime;
            playerRhythm = [];
        } else {
            // 记录时间间隔
            const interval = currentTime - lastTapTime;
            playerRhythm.push(interval);
            lastTapTime = currentTime;
        }
        
        // 更新显示
        playerDisplay.innerHTML = '';
        for (let i = 0; i <= playerRhythm.length; i++) {
            const beat = document.createElement('div');
            beat.className = 'w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg';
            beat.textContent = i + 1;
            playerDisplay.appendChild(beat);
        }
        
        // 添加点击动画
        tapBtn.classList.add('scale-95');
        setTimeout(() => {
            tapBtn.classList.remove('scale-95');
        }, 100);
        
        // 播放音效
        playBeep(523, 100);
        
        // 如果达到节拍数，自动检查
        if (playerRhythm.length === aiRhythm.length) {
            setTimeout(() => {
                checkRhythm();
            }, 500);
        }
    });

    // 清空玩家节奏
    clearBtn.addEventListener('click', () => {
        playerRhythm = [];
        lastTapTime = 0;
        playerDisplay.innerHTML = '';
        resultDiv.classList.add('hidden');
    });

    // 检查节奏
    checkBtn.addEventListener('click', () => {
        checkRhythm();
    });

    function checkRhythm() {
        if (aiRhythm.length === 0) {
            alert('请先播放AI的节奏！');
            return;
        }
        
        if (playerRhythm.length === 0) {
            alert('请先打出你的节奏！');
            return;
        }
        
        // 计算相似度
        const similarity = calculateRhythmSimilarity(aiRhythm, playerRhythm);
        const score = Math.round(similarity * 100);
        
        resultDiv.classList.remove('hidden');
        
        if (score >= 90) {
            resultEmoji.textContent = '🎉';
            resultText.textContent = '完美！你的节奏感超棒！';
            resultDetail.textContent = '你完全掌握了AI的节奏，简直就是音乐天才！';
            resultScore.textContent = `准确度：${score}% ⭐⭐⭐`;
        } else if (score >= 75) {
            resultEmoji.textContent = '😊';
            resultText.textContent = '很好！节奏感不错！';
            resultDetail.textContent = '你的节奏很接近AI了，再练习一下会更好！';
            resultScore.textContent = `准确度：${score}% ⭐⭐`;
        } else if (score >= 60) {
            resultEmoji.textContent = '👍';
            resultText.textContent = '不错！继续加油！';
            resultDetail.textContent = '你已经掌握了基本的节奏，多练习会进步很快！';
            resultScore.textContent = `准确度：${score}% ⭐`;
        } else {
            resultEmoji.textContent = '💪';
            resultText.textContent = '加油！再试一次！';
            resultDetail.textContent = '节奏需要多练习，仔细听AI的节奏，慢慢来！';
            resultScore.textContent = `准确度：${score}%`;
        }
        
        // 重置
        lastTapTime = 0;
    }

    // 计算节奏相似度
    function calculateRhythmSimilarity(rhythm1, rhythm2) {
        if (rhythm1.length !== rhythm2.length) {
            // 长度不同，根据长度差异给予惩罚
            const lengthPenalty = Math.abs(rhythm1.length - rhythm2.length) * 0.1;
            return Math.max(0, 0.5 - lengthPenalty);
        }
        
        let totalError = 0;
        let maxError = 0;
        
        for (let i = 0; i < rhythm1.length; i++) {
            const error = Math.abs(rhythm1[i] - rhythm2[i]);
            totalError += error;
            maxError += Math.max(rhythm1[i], rhythm2[i]);
        }
        
        // 计算相似度（1 - 平均误差率）
        const similarity = 1 - (totalError / maxError);
        return Math.max(0, Math.min(1, similarity));
    }

    // 播放音效（使用Web Audio API）
    function playBeep(frequency, duration) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + duration / 1000);
        } catch (e) {
            console.log('音效播放失败（浏览器可能不支持）');
        }
    }
}

// 神经网络演示
function initNeuralNetwork() {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const trainBtn = document.getElementById('train-network');
    const statusDiv = document.getElementById('training-status');
    const statusEmoji = document.getElementById('training-emoji');
    const statusText = document.getElementById('training-text');
    const statusDetail = document.getElementById('training-detail');
    
    if (!trainBtn || !statusDiv || !statusEmoji || !statusText || !statusDetail) return;

    // 神经网络结构
    const layers = [
        { neurons: 3, x: 50, y: 150, color: '#3B82F6', spacing: 80 },
        { neurons: 4, x: 200, y: 150, color: '#10B981', spacing: 60 },
        { neurons: 4, x: 350, y: 150, color: '#10B981', spacing: 60 },
        { neurons: 2, x: 500, y: 150, color: '#F59E0B', spacing: 100 }
    ];

    // 辅助函数：计算神经元Y坐标
    function getNeuronY(layer, neuronIndex) {
        const totalHeight = (layer.neurons - 1) * layer.spacing;
        const startY = layer.y - totalHeight / 2;
        return startY + neuronIndex * layer.spacing;
    }

    // 绘制神经网络
    function drawNetwork(activeConnections = []) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 绘制连接线
        for (let i = 0; i < layers.length - 1; i++) {
            const currentLayer = layers[i];
            const nextLayer = layers[i + 1];

            for (let j = 0; j < currentLayer.neurons; j++) {
                for (let k = 0; k < nextLayer.neurons; k++) {
                    const x1 = currentLayer.x;
                    const y1 = getNeuronY(currentLayer, j);
                    const x2 = nextLayer.x;
                    const y2 = getNeuronY(nextLayer, k);

                    const activeConn = activeConnections.find(conn => 
                        conn.from === i && conn.to === i + 1 && 
                        conn.fromNeuron === j && conn.toNeuron === k
                    );

                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.strokeStyle = activeConn ? (activeConn.color || '#8B5CF6') : '#E5E7EB';
                    ctx.lineWidth = activeConn ? 3 : 1;
                    ctx.stroke();
                }
            }
        }

        // 绘制神经元
        layers.forEach((layer, layerIndex) => {
            for (let i = 0; i < layer.neurons; i++) {
                const x = layer.x;
                const y = getNeuronY(layer, i);

                ctx.beginPath();
                ctx.arc(x, y, 15, 0, Math.PI * 2);
                ctx.fillStyle = layer.color;
                ctx.fill();
                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = 3;
                ctx.stroke();
            }
        });
    }

    // 初始绘制
    drawNetwork();

    // 训练动画
    let isTraining = false;

    // 工具函数
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    function generateConnectionsBetween(layerIndex, nextIndex, color, count = 3) {
        const layer = layers[layerIndex];
        const nextLayer = layers[nextIndex];
        const maxPairs = layer.neurons * nextLayer.neurons;
        const connectionsPerLayer = Math.min(count, maxPairs);
        const usedPairs = new Set();
        const activeConnections = [];

        while (usedPairs.size < connectionsPerLayer) {
            const fromNeuron = Math.floor(Math.random() * layer.neurons);
            const toNeuron = Math.floor(Math.random() * nextLayer.neurons);
            const key = `${fromNeuron}-${toNeuron}`;
            if (usedPairs.has(key)) continue;
            usedPairs.add(key);
            activeConnections.push({
                from: layerIndex,
                to: nextIndex,
                fromNeuron,
                toNeuron,
                color
            });
        }

        return activeConnections;
    }

    async function animatePassSequence(pairs, delay = 180) {
        for (const pair of pairs) {
            const connections = generateConnectionsBetween(pair.from, pair.to, pair.color, pair.count || 3);
            drawNetwork(connections);
            await wait(delay);
        }
    }

    trainBtn.addEventListener('click', async () => {
        if (isTraining) return;
        isTraining = true;
        statusDiv.classList.remove('hidden');
        trainBtn.disabled = true;

        let accuracy = 55 + Math.random() * 10; // 起步准确率
        let loss = 1.2; // 起步损失

        // 每次点击重新绘制初始状态
        drawNetwork();

        for (let epoch = 1; epoch <= 10; epoch++) {
            // 模拟前向传播
            statusEmoji.textContent = '🚀';
            statusText.textContent = `训练轮次: ${epoch}/10 - 前向传播`;
            statusDetail.textContent = `准确率: ${accuracy.toFixed(1)}% | 损失: ${loss.toFixed(3)} | 学习率: 0.01`;
            await animatePassSequence([
                { from: 0, to: 1, color: '#22c55e' },
                { from: 1, to: 2, color: '#22c55e' },
                { from: 2, to: 3, color: '#22c55e' }
            ], 200);

            // 模拟反向传播
            statusEmoji.textContent = '🔄';
            statusText.textContent = `训练轮次: ${epoch}/10 - 反向传播`;
            statusDetail.textContent = `准确率: ${accuracy.toFixed(1)}% | 损失: ${loss.toFixed(3)} | 正在更新权重...`;
            await animatePassSequence([
                { from: 2, to: 3, color: '#f97316', count: 2 },
                { from: 1, to: 2, color: '#f97316', count: 2 },
                { from: 0, to: 1, color: '#f97316', count: 2 }
            ], 180);

            // 更新指标，模拟收敛
            accuracy = Math.min(98, accuracy + 4 + Math.random() * 3);
            loss = Math.max(0.02, loss * (0.7 + Math.random() * 0.1));

            statusEmoji.textContent = '🎯';
            statusText.textContent = `训练轮次: ${epoch}/10 - 评估中`;
            statusDetail.textContent = `准确率: ${accuracy.toFixed(1)}% | 损失: ${loss.toFixed(3)} | 验证中...`;
            await wait(220);

            // 清除高亮，准备下一轮
            drawNetwork();
            await wait(120);
        }

        statusEmoji.textContent = '🎉';
        statusText.textContent = '训练完成！';
        statusDetail.textContent = `最终准确率: ${accuracy.toFixed(1)}% | 最终损失: ${loss.toFixed(3)}`;
        drawNetwork();
        trainBtn.disabled = false;
        isTraining = false;
    });
}

// AI分类游戏
function initClassificationGame() {
    const itemCards = document.querySelectorAll('.item-card');
    const categoryBoxes = document.querySelectorAll('.category-box');
    const checkBtn = document.getElementById('check-classification');
    const resetBtn = document.getElementById('reset-classification');
    const resultDiv = document.getElementById('classification-result');
    const resultEmoji = document.getElementById('classification-emoji');
    const resultText = document.getElementById('classification-text');
    const resultDetail = document.getElementById('classification-detail');
    
    if (!checkBtn || !resetBtn || !resultDiv || !resultEmoji || !resultText || !resultDetail) return;
    if (itemCards.length === 0 || categoryBoxes.length === 0) return;

    let selectedItem = null;
    const placements = {};

    // 选择物品
    itemCards.forEach(card => {
        card.addEventListener('click', () => {
            // 移除其他选中状态
            itemCards.forEach(c => c.classList.remove('ring-4', 'ring-purple-500'));
            
            // 选中当前物品
            card.classList.add('ring-4', 'ring-purple-500');
            selectedItem = {
                name: card.getAttribute('data-item'),
                correctCategory: card.getAttribute('data-category'),
                element: card
            };
        });
    });

    // 点击分类框放置物品
    categoryBoxes.forEach(box => {
        box.addEventListener('click', () => {
            if (!selectedItem) {
                alert('请先选择一个物品！');
                return;
            }

            const category = box.getAttribute('data-category');
            const dropZone = box.querySelector('.drop-zone');

            // 创建放置的物品副本
            const placedItem = document.createElement('div');
            placedItem.className = 'bg-white rounded-lg p-2 text-center shadow';
            placedItem.innerHTML = selectedItem.element.innerHTML;
            placedItem.setAttribute('data-item', selectedItem.name);
            placedItem.setAttribute('data-correct-category', selectedItem.correctCategory);

            dropZone.appendChild(placedItem);

            // 记录放置
            placements[selectedItem.name] = category;

            // 隐藏原物品
            selectedItem.element.style.opacity = '0.3';
            selectedItem.element.style.pointerEvents = 'none';

            // 清除选中状态
            selectedItem.element.classList.remove('ring-4', 'ring-purple-500');
            selectedItem = null;
        });
    });

    // 检查答案
    checkBtn.addEventListener('click', () => {
        let correct = 0;
        let total = 0;

        categoryBoxes.forEach(box => {
            const dropZone = box.querySelector('.drop-zone');
            const items = dropZone.querySelectorAll('[data-item]');

            items.forEach(item => {
                total++;
                const itemName = item.getAttribute('data-item');
                const correctCategory = item.getAttribute('data-correct-category');
                const placedCategory = box.getAttribute('data-category');

                if (correctCategory === placedCategory) {
                    correct++;
                    item.classList.add('ring-2', 'ring-green-500');
                } else {
                    item.classList.add('ring-2', 'ring-red-500');
                }
            });
        });

        resultDiv.classList.remove('hidden');
        
        if (correct === total && total > 0) {
            resultEmoji.textContent = '🎉';
            resultText.textContent = '太棒了！全部正确！';
            resultDetail.textContent = `你答对了 ${correct}/${total} 个，AI为你点赞！👍`;
        } else if (correct >= total * 0.6) {
            resultEmoji.textContent = '😊';
            resultText.textContent = '不错哦！继续加油！';
            resultDetail.textContent = `你答对了 ${correct}/${total} 个，还有进步空间！`;
        } else {
            resultEmoji.textContent = '💪';
            resultText.textContent = '加油！再试一次！';
            resultDetail.textContent = `你答对了 ${correct}/${total} 个，多练习就会进步！`;
        }
    });

    // 重置游戏
    resetBtn.addEventListener('click', () => {
        // 清空所有分类框
        categoryBoxes.forEach(box => {
            const dropZone = box.querySelector('.drop-zone');
            dropZone.innerHTML = '';
        });

        // 恢复所有物品
        itemCards.forEach(card => {
            card.style.opacity = '1';
            card.style.pointerEvents = 'auto';
            card.classList.remove('ring-4', 'ring-purple-500');
        });

        // 隐藏结果
        resultDiv.classList.add('hidden');
        selectedItem = null;
        Object.keys(placements).forEach(key => delete placements[key]);
    });
}

// 课堂测验
function initQuiz() {
    const submitBtn = document.getElementById('submit-quiz');
    const resultDiv = document.getElementById('quiz-result');
    const resultEmoji = document.getElementById('quiz-emoji');
    const resultScore = document.getElementById('quiz-score');
    const resultMessage = document.getElementById('quiz-message');
    
    if (!submitBtn || !resultDiv || !resultEmoji || !resultScore || !resultMessage) return;

    const correctAnswers = {
        q1: 'A',
        q2: 'A',
        q3: 'C',
        q4: 'A',
        q5: 'A'
    };

    submitBtn.addEventListener('click', () => {
        let score = 0;
        let total = Object.keys(correctAnswers).length;

        // 检查答案
        Object.keys(correctAnswers).forEach(question => {
            const selected = document.querySelector(`input[name="${question}"]:checked`);
            if (selected && selected.value === correctAnswers[question]) {
                score++;
            }
        });

        // 显示结果
        resultDiv.classList.remove('hidden');
        resultScore.textContent = `你的得分：${score}/${total}`;

        if (score === total) {
            resultEmoji.textContent = '🎉';
            resultMessage.textContent = '太棒了！你完全掌握了AI的知识！你是AI小专家！';
        } else if (score >= total * 0.8) {
            resultEmoji.textContent = '😊';
            resultMessage.textContent = '非常好！你对AI有很好的理解！继续保持！';
        } else if (score >= total * 0.6) {
            resultEmoji.textContent = '👍';
            resultMessage.textContent = '不错！你已经了解了AI的基础知识！';
        } else {
            resultEmoji.textContent = '💪';
            resultMessage.textContent = '加油！回顾一下课程内容，你会做得更好！';
        }

        // 滚动到结果
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}

// 动手实践功能
function initPractice() {
    // 实验1：教AI认识形状
    initShapeTeaching();
    
    // 实验2：决策树游戏
    initDecisionTree();
    
    // 实验3：强化学习迷宫
    initMazeLearning();
    
    console.log('🔬 动手实践功能已初始化');
}

// 实验1：教AI认识形状
function initShapeTeaching() {
    const shapeItems = document.querySelectorAll('.shape-item');
    const labelButtons = document.querySelectorAll('.label-btn');
    const testButton = document.getElementById('test-shape');
    const resultDiv = document.getElementById('shape-result');
    const resultEmoji = document.getElementById('shape-result-emoji');
    const resultText = document.getElementById('shape-result-text');
    const resultDetail = document.getElementById('shape-result-detail');
    
    if (!testButton || !resultDiv || !resultEmoji || !resultText || !resultDetail) return;
    if (shapeItems.length === 0 || labelButtons.length === 0) return;

    let selectedShape = null;
    const aiMemory = {}; // AI的记忆

    // 保存每个形状的原始背景类
    const originalBgClasses = new Map();
    shapeItems.forEach(item => {
        const bgClasses = Array.from(item.classList).filter(c => 
            c.startsWith('bg-gradient') || c.startsWith('from-') || c.startsWith('to-')
        );
        originalBgClasses.set(item, bgClasses);
    });

    // 选择形状
    shapeItems.forEach(item => {
        item.addEventListener('click', () => {
            // 清除所有选中状态并恢复原背景
            shapeItems.forEach(i => {
                i.classList.remove('ring-4', 'ring-purple-500');
            });
            
            // 选中当前形状
            item.classList.add('ring-4', 'ring-purple-500');
            selectedShape = item.getAttribute('data-shape');
        });
    });

    // 教AI标签
    labelButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (!selectedShape) {
                alert('请先选择一个形状！');
                return;
            }

            const label = button.getAttribute('data-label');
            aiMemory[selectedShape] = label;

            // 显示学习反馈
            resultDiv.classList.remove('hidden');
            resultEmoji.textContent = '🎓';
            resultText.textContent = `AI学会了！`;
            resultDetail.textContent = `AI记住了：这个形状是${label}。已学习 ${Object.keys(aiMemory).length}/4 个形状。`;

            // 清除选中（不影响原背景）
            shapeItems.forEach(i => {
                i.classList.remove('ring-4', 'ring-purple-500');
            });
            selectedShape = null;

            // 添加动画
            button.classList.add('pulse-animation');
            setTimeout(() => {
                button.classList.remove('pulse-animation');
            }, 1000);
        });
    });

    // 测试AI
    testButton.addEventListener('click', () => {
        const learnedCount = Object.keys(aiMemory).length;
        
        if (learnedCount === 0) {
            resultDiv.classList.remove('hidden');
            resultEmoji.textContent = '😅';
            resultText.textContent = 'AI还没学习呢！';
            resultDetail.textContent = '请先选择形状并告诉AI这是什么。';
            return;
        }

        // 随机测试一个已学习的形状
        const shapes = Object.keys(aiMemory);
        const testShape = shapes[Math.floor(Math.random() * shapes.length)];
        const correctLabel = aiMemory[testShape];

        resultDiv.classList.remove('hidden');
        resultEmoji.textContent = '🎉';
        resultText.textContent = `AI测试成功！`;
        resultDetail.textContent = `AI正确识别出了${correctLabel}！学习进度：${learnedCount}/4`;

        // 高亮测试的形状
        shapeItems.forEach(item => {
            if (item.getAttribute('data-shape') === testShape) {
                item.classList.add('ring-4', 'ring-green-500');
                setTimeout(() => {
                    item.classList.remove('ring-4', 'ring-green-500');
                }, 2000);
            }
        });
    });
}

// 实验2：决策树游戏
function initDecisionTree() {
    const startButton = document.getElementById('start-decision');
    const restartButton = document.getElementById('restart-decision');
    const questionText = document.getElementById('question-text');
    const questionButtons = document.getElementById('question-buttons');
    const resultDiv = document.getElementById('decision-result');
    const resultEmoji = document.getElementById('decision-emoji');
    const resultText = document.getElementById('decision-text');
    
    if (!startButton || !restartButton || !questionText || !questionButtons || !resultDiv || !resultEmoji || !resultText) return;

    let currentStep = 0;
    let answers = [];

    const decisionTree = [
        {
            question: '它会在水里游泳吗？',
            yes: 1,
            no: 2
        },
        {
            question: '它有鳞片吗？',
            yes: { result: '鱼', emoji: '🐟' },
            no: { result: '狗', emoji: '🐶' }
        },
        {
            question: '它会飞吗？',
            yes: { result: '鸟', emoji: '🐦' },
            no: 3
        },
        {
            question: '它会喵喵叫吗？',
            yes: { result: '猫', emoji: '🐱' },
            no: { result: '狗', emoji: '🐶' }
        }
    ];

    function showQuestion(step) {
        const node = decisionTree[step];
        questionText.textContent = node.question;
        questionButtons.innerHTML = `
            <button class="decision-yes bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transform transition">
                ✅ 是的
            </button>
            <button class="decision-no bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transform transition">
                ❌ 不是
            </button>
        `;

        document.querySelector('.decision-yes').addEventListener('click', () => handleAnswer(true));
        document.querySelector('.decision-no').addEventListener('click', () => handleAnswer(false));
    }

    function handleAnswer(isYes) {
        answers.push(isYes);
        const node = decisionTree[currentStep];
        const next = isYes ? node.yes : node.no;

        if (typeof next === 'number') {
            currentStep = next;
            showQuestion(currentStep);
        } else {
            // 到达结果
            showResult(next);
        }
    }

    function showResult(result) {
        questionText.textContent = '';
        questionButtons.innerHTML = '';
        resultDiv.classList.remove('hidden');
        resultEmoji.textContent = result.emoji;
        resultText.textContent = `AI猜测你想的是：${result.result}！`;
    }

    function resetGame() {
        currentStep = 0;
        answers = [];
        resultDiv.classList.add('hidden');
        questionText.textContent = '准备好了吗？点击开始！';
        questionButtons.innerHTML = `
            <button id="start-decision-new" class="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transform transition">
                🚀 开始游戏
            </button>
        `;
        document.getElementById('start-decision-new').addEventListener('click', () => showQuestion(0));
    }

    startButton.addEventListener('click', () => showQuestion(0));
    restartButton.addEventListener('click', resetGame);
}

// 实验3：强化学习迷宫
function initMazeLearning() {
    const mazeGrid = document.getElementById('maze-grid');
    const trainButton = document.getElementById('train-maze');
    const resetButton = document.getElementById('reset-maze');
    const attemptsDisplay = document.getElementById('maze-attempts');
    const successDisplay = document.getElementById('maze-success');
    const rateDisplay = document.getElementById('maze-rate');
    const statusDiv = document.getElementById('maze-status');
    const statusEmoji = document.getElementById('maze-status-emoji');
    const statusText = document.getElementById('maze-status-text');
    
    if (!mazeGrid || !trainButton || !resetButton || !attemptsDisplay || !successDisplay || !rateDisplay || !statusDiv || !statusEmoji || !statusText) return;

    // 迷宫布局 (0=空地, 1=墙壁, 2=起点, 3=终点)
    const maze = [
        [2, 0, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 3]
    ];

    let aiPosition = [0, 0];
    let attempts = 0;
    let successes = 0;
    let isTraining = false;

    // 初始化迷宫显示
    function initMaze() {
        mazeGrid.innerHTML = '';
        maze.forEach((row, i) => {
            row.forEach((cell, j) => {
                const cellDiv = document.createElement('div');
                cellDiv.className = 'maze-cell w-16 h-16 rounded-lg flex items-center justify-center text-3xl transition-all';
                cellDiv.id = `cell-${i}-${j}`;
                
                if (cell === 1) {
                    cellDiv.className += ' bg-gray-800';
                    cellDiv.textContent = '⬛';
                } else if (cell === 2) {
                    cellDiv.className += ' bg-blue-200';
                    cellDiv.textContent = '🤖';
                } else if (cell === 3) {
                    cellDiv.className += ' bg-green-200';
                    cellDiv.textContent = '🎯';
                } else {
                    cellDiv.className += ' bg-gray-100';
                }
                
                mazeGrid.appendChild(cellDiv);
            });
        });
    }

    // 更新AI位置显示
    function updateAIPosition(oldPos, newPos) {
        const oldCell = document.getElementById(`cell-${oldPos[0]}-${oldPos[1]}`);
        const newCell = document.getElementById(`cell-${newPos[0]}-${newPos[1]}`);
        
        if (oldCell && maze[oldPos[0]][oldPos[1]] !== 2) {
            oldCell.textContent = '';
            oldCell.className = 'maze-cell w-16 h-16 rounded-lg flex items-center justify-center text-3xl transition-all bg-gray-100';
        }
        
        if (newCell) {
            if (maze[newPos[0]][newPos[1]] === 3) {
                newCell.textContent = '🎉';
                newCell.className = 'maze-cell w-16 h-16 rounded-lg flex items-center justify-center text-3xl transition-all bg-yellow-200';
            } else {
                newCell.textContent = '🤖';
                newCell.className = 'maze-cell w-16 h-16 rounded-lg flex items-center justify-center text-3xl transition-all bg-blue-200';
            }
        }
    }

    // AI移动
    function moveAI(direction) {
        const [x, y] = aiPosition;
        let newX = x, newY = y;

        switch(direction) {
            case 'up': newX = x - 1; break;
            case 'down': newX = x + 1; break;
            case 'left': newY = y - 1; break;
            case 'right': newY = y + 1; break;
        }

        // 检查是否有效移动
        if (newX >= 0 && newX < 5 && newY >= 0 && newY < 5 && maze[newX][newY] !== 1) {
            const oldPos = [...aiPosition];
            aiPosition = [newX, newY];
            updateAIPosition(oldPos, aiPosition);
            return true;
        }
        return false;
    }

    // 训练AI（简化的强化学习）
    async function trainAI() {
        if (isTraining) return;
        isTraining = true;
        trainButton.disabled = true;

        statusDiv.classList.remove('hidden');
        statusEmoji.textContent = '🎓';
        statusText.textContent = 'AI正在学习中...';

        for (let i = 0; i < 10; i++) {
            attempts++;
            aiPosition = [0, 0];
            initMaze();

            let steps = 0;
            let success = false;

            // AI尝试走迷宫（随机策略逐渐优化）
            while (steps < 20) {
                await new Promise(resolve => setTimeout(resolve, 200));

                // 简单策略：优先向右和向下
                const directions = ['right', 'down', 'up', 'left'];
                let moved = false;

                for (const dir of directions) {
                    if (moveAI(dir)) {
                        moved = true;
                        break;
                    }
                }

                if (!moved) break;

                steps++;

                // 检查是否到达终点
                if (aiPosition[0] === 4 && aiPosition[1] === 4) {
                    success = true;
                    successes++;
                    statusEmoji.textContent = '🎉';
                    statusText.textContent = `第${attempts}次尝试成功！`;
                    await new Promise(resolve => setTimeout(resolve, 500));
                    break;
                }
            }

            if (!success) {
                statusEmoji.textContent = '💪';
                statusText.textContent = `第${attempts}次尝试失败，继续学习...`;
            }

            // 更新统计
            attemptsDisplay.textContent = attempts;
            successDisplay.textContent = successes;
            rateDisplay.textContent = `${Math.round((successes / attempts) * 100)}%`;

            await new Promise(resolve => setTimeout(resolve, 300));
        }

        statusEmoji.textContent = '✅';
        statusText.textContent = '训练完成！AI学会了走迷宫！';
        isTraining = false;
        trainButton.disabled = false;
    }

    // 重置
    function resetMaze() {
        aiPosition = [0, 0];
        attempts = 0;
        successes = 0;
        isTraining = false;
        trainButton.disabled = false;
        
        attemptsDisplay.textContent = '0';
        successDisplay.textContent = '0';
        rateDisplay.textContent = '0%';
        statusDiv.classList.add('hidden');
        
        initMaze();
    }

    // 初始化
    initMaze();
    trainButton.addEventListener('click', trainAI);
    resetButton.addEventListener('click', resetMaze);
}

// 加载Base64图片
function loadImages() {
    // 检查ImageAssets是否已加载，如果未加载则等待
    if (typeof ImageAssets === 'undefined') {
        console.warn('ImageAssets尚未加载，等待中...');
        setTimeout(loadImages, 100);
        return;
    }
    
    // 加载导航栏AI机器人头像
    const aiRobotImg = document.getElementById('aiRobotImg');
    if (aiRobotImg) {
        aiRobotImg.src = ImageAssets.aiRobot;
    }
    
    // 加载"什么是人工智能"章节的AI机器人图片
    const aiRobotIntroImg = document.getElementById('aiRobotIntroImg');
    if (aiRobotIntroImg) {
        aiRobotIntroImg.src = ImageAssets.aiRobot;
    }
    
    // 加载AI原理章节的AI大脑图片
    const aiBrainImg = document.getElementById('aiBrainImg');
    if (aiBrainImg) {
        aiBrainImg.src = ImageAssets.aiBrain;
    }
    
    // 加载图片识别游戏的所有图片
    const catImg = document.querySelector('.game-img-cat');
    if (catImg) catImg.src = ImageAssets.cat;
    
    const dogImg = document.querySelector('.game-img-dog');
    if (dogImg) dogImg.src = ImageAssets.dog;
    
    const carImg = document.querySelector('.game-img-car');
    if (carImg) carImg.src = ImageAssets.car;
    
    const planeImg = document.querySelector('.game-img-plane');
    if (planeImg) planeImg.src = ImageAssets.plane;
    
    const pandaImg = document.querySelector('.game-img-panda');
    if (pandaImg) pandaImg.src = ImageAssets.panda;
    
    const appleImg = document.querySelector('.game-img-apple');
    if (appleImg) appleImg.src = ImageAssets.apple;
    
    const bicycleImg = document.querySelector('.game-img-bicycle');
    if (bicycleImg) bicycleImg.src = ImageAssets.bicycle;
    
    const flowerImg = document.querySelector('.game-img-flower');
    if (flowerImg) flowerImg.src = ImageAssets.flower;
    
    console.log('✅ 所有图片已从Base64加载完成');
}

// 初始化所有功能
function init() {
    loadImages();
    initNavigation();
    initImageRecognition();
    initChatGame();
    initRhythmGame();
    initNeuralNetwork();
    initClassificationGame();
    initQuiz();
    initPractice();
    
    console.log('🎉 AI趣味课件加载完成！');
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

export { initNavigation, initImageRecognition, initChatGame, initRhythmGame, initNeuralNetwork, initClassificationGame, initQuiz, initPractice };