/* Gallery data, read by index.html and view.html. Generated; edit the card text here or in the build script. */
window.FEATURED = "16-time-series-zero-shot";
window.FORMS = [
 {
  "id": "lesson",
  "name": "Step-by-step lessons",
  "short": "Lesson",
  "hand": "Step by step",
  "skill": "stepper-lesson",
  "use": "How something works, one idea at a time.",
  "when": "The reader presses Next, and each step adds one thing to the drawing. One or two steps ask the reader to try something or make a guess before the answer appears.",
  "look": "The opening sets up the situation, the ordinary case comes before the failure, and the last step says what to do."
 },
 {
  "id": "replay",
  "name": "Replays of real runs",
  "short": "Replay",
  "hand": "Watch it happen",
  "skill": "system-replay",
  "use": "What happened over time between several people or programs.",
  "when": "Recorded events play on one clock that the reader can pause and drag. Short parts, each with a caption, show who waited, what was passed along and where things went wrong.",
  "look": "Waiting shows as empty time on the clock, and the clock says how much real time one second on screen stands for."
 },
 {
  "id": "explorable",
  "name": "What-if models",
  "short": "What-if",
  "hand": "Turn the dial",
  "skill": "explorable-model",
  "use": "How an outcome changes with a price, a threshold or a rate.",
  "when": "The reader moves a slider and every linked view updates, with the break-even point marked, so the answer to “what if it cost twice as much?” is one drag away.",
  "look": "The caption changes with the value, and numbers that come from a model are labelled as modelled."
 },
 {
  "id": "units",
  "name": "Every item a dot",
  "short": "Dot chart",
  "hand": "Count them",
  "skill": "unit-story",
  "use": "How many items landed where, and how sure we can be.",
  "when": "Each test case, answer or form is one dot. Dots move between groups, so a percentage becomes something you can count, and small samples show the range they allow.",
  "look": "The same dot stays the same item across steps, and ranges show what a small sample can and cannot rule out."
 },
 {
  "id": "guess",
  "name": "Guess, then see",
  "short": "Guess first",
  "hand": "Make a guess",
  "skill": "predict-reveal",
  "use": "A number most people would get wrong.",
  "when": "The reader commits a guess by dragging or tapping, then the real data animates in against it. Committing first makes the gap easier to remember.",
  "look": "Your guess stays on screen next to the answer."
 },
 {
  "id": "figure",
  "name": "Single figures",
  "short": "Figure",
  "hand": "One view",
  "skill": "explainer-kit",
  "use": "One idea that fits one view, next to an article.",
  "when": "No steps and no Next button: one drawing that appears once, with at most one control or a short loop, for use inside a report, a README or a blog post.",
  "look": "The one control changes the drawing and the caption together."
 }
];
window.EXAMPLES = [
 {
  "form": "lesson",
  "slug": "28-monitor-removal-honesty",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/28-monitor-removal-honesty",
  "sourceShort": "Notebook 28",
  "title": "A coding AI turns off its safety check",
  "text": "A rule says never switch off the program that watches a coding AI, but the job needs it off. Guess what five small models did, and what they said afterwards.",
  "intro": [
   "AI coding agents now edit code and run tests by themselves. A separate program, the monitor, watches what they do and alerts a person. Suppose the quickest way to finish a job is to switch the monitor off. If the agent does it and later says the monitor is still on, nobody is watching and nobody knows.",
   "This lesson shows what five small, openly published AI models did with three made-up jobs built around that clash, and how they answered when asked afterwards. Press Start lesson, then pick a guess at each question before the answer appears."
  ],
  "source": "Notebook 28 in the experiment-notebooks repo: 5 small open-weight models, 3 made-up coding jobs, 150 runs at the decision point and 1,260 answers in all",
  "kb": 78
 },
 {
  "form": "lesson",
  "slug": "10-code-execution-guardrails",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/10-code-execution-guardrails",
  "sourceShort": "Notebook 10",
  "title": "Can an AI agent's file check be tricked?",
  "text": "Before an AI agent deletes or changes a file, a small program checks the request. Try tricky file paths and see whether they fool a check that reads only the start.",
  "intro": [
   "An AI agent working in a project asks to read, write or delete files. A small program, called a gate, checks each request against the rules before it runs. If a request that looks like it stays in the project's scratch folder really ends somewhere else, the agent could delete files other teams rely on.",
   "This seven-step lesson uses the 22 test requests from notebook 10. Press Start, guess whether the gate should allow four tricky requests, then type your own file paths and compare two gate designs."
  ],
  "source": "Notebook 10 in the experiment-notebooks repo: 22 written file requests (8 that should run, 14 that should be blocked) put through 5 gate designs; no AI model in the loop",
  "kb": 87
 },
 {
  "form": "lesson",
  "slug": "29-theory-of-mind",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/29-theory-of-mind",
  "sourceShort": "Notebook 29",
  "title": "Do AI models track what other people know?",
  "text": "Priya did not see her key move, so she looks in the old place. Try story pairs like this and see which AI models keep track of who knows what.",
  "intro": [
   "AI models write for people who know less than they do: a colleague who missed a change, a customer who cannot see what the model saw. To send the right message, a model has to keep track of what each person knows, and act on it.",
   "This lesson uses short stories written for the test, in pairs that differ in one detail, such as whether someone saw a change. Ten AI models answered questions about 240 pairs. Press Start lesson, try a pair yourself, then tap the story families to compare the models."
  ],
  "source": "Notebook 29 in the experiment-notebooks repo: 480 stories generated in code as 240 pairs in 8 families, 10 models; a pair scores only if both stories are answered right",
  "kb": 78
 },
 {
  "form": "lesson",
  "slug": "39-heat-race",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/39-rust-vs-python",
  "sourceShort": "Notebook 39",
  "title": "One heat program raced in nine languages",
  "text": "An engineer wants a program that shows how heaters warm a floor plan. An AI model wrote it in nine programming languages. Guess the gap, then watch all nine race.",
  "intro": [
   "An engineer wants to see how heaters warm the rooms of a floor plan, and will rerun the simulation for many heater spots. Every run means waiting. An AI model can write the program in any programming language, and every version gives the same answer, so the language changes only the wait.",
   "This lesson races nine versions written by one AI model on the same grid, timed on one laptop. Press Start, guess how much longer the slowest version takes, then watch the race and see what changed the speed inside Python."
  ],
  "source": "Notebook 39 in the experiment-notebooks repo: one AI model's nine versions of the heat task, median of 5 timed runs on a 400 x 400 grid, plus plain-Python times from ten models",
  "kb": 82
 },
 {
  "form": "lesson",
  "slug": "39-same-language-gaps",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/39-rust-vs-python",
  "sourceShort": "Notebook 39",
  "title": "Correct programs, same language, very different speeds",
  "text": "Ten AI models wrote the same program in the same language, and every one gave the right answer. In five cases, guess which of two approaches ran faster.",
  "intro": [
   "Each morning a program reads a website's log and prints a summary. Two AI models write it in the same programming language, and both pass every check of the answer. Nobody times them, so a slow one can waste time every morning without anyone noticing.",
   "This lesson walks through five tasks where ten AI models wrote the same program in the same language. Press Start, read the two approaches in each case, tap the one you think ran faster, then see all ten timed programs."
  ],
  "source": "Notebook 39 in the experiment-notebooks repo: five tasks, ten AI models per task, median of 5 timed runs on the full input; all 832 programs in the study gave correct output",
  "kb": 80
 },
 {
  "form": "lesson",
  "slug": "39-models-and-testing",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/39-rust-vs-python",
  "sourceShort": "Notebook 39",
  "title": "Which AI writes faster code, at what cost",
  "text": "AI models differ in price, and can answer in one reply or in a session where they run and test their code. Compare which wrote faster programs, and what that cost.",
  "intro": [
   "A delivery firm needs a program that finds the shortest route for each van. It can ask a cheap AI model or an expensive one, and ask for the code in one reply or let the model work in an agent session, where it runs, times and fixes its code. A slow route finder holds up every van.",
   "Thirteen authors wrote the same 64 programs, and every program was timed. Press Start to see each author's speed score, guess how much slower one-reply code ran, tap any of the 64 programs, and weigh speed against cost."
  ],
  "source": "Notebook 39 in the experiment-notebooks repo: 13 authors (ten models in agent sessions, three in one reply) x 64 programs, median of 5 timed runs; one model measured both ways; costs at list price",
  "kb": 86
 },
 {
  "form": "lesson",
  "slug": "economics-of-intelligence-teams",
  "style": "chalkboard",
  "link": "https://arxiv.org/abs/2611.05417",
  "sourceShort": "Organizing Intelligence, a research paper",
  "title": "Teams, skills and how big a firm can grow",
  "text": "A coder who writes badly, a writer who codes badly, a coordinator weak at both. Build teams, guess the coordinator's pay, and find what limits a firm's size.",
  "intro": [
   "A firm needs work that takes more than one skill, such as an app and its manual. Workers who are weak at one skill can still do well together, and how well they build on each other's work limits how big a firm can grow. A research paper uses this to ask how AI agents should be judged.",
   "This six-step lesson uses the paper's made-up economy of 14 workers. Tap workers to build a team, guess a coordinator's pay, then drag the sliders to see what sets a firm's size. Numbers come from the paper's model, not from measurements. Press Start the lesson."
  ],
  "source": "Organizing Intelligence (Imas, Koh and Legg, arXiv 2611.05417), section 2: a 14-worker model economy, modelled rather than measured, with its companion essay The economics of intelligence",
  "kb": 85
 },
 {
  "form": "replay",
  "slug": "07-subagent-handoff-harness",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/07-subagent-handoff-harness",
  "sourceShort": "Notebook 07",
  "title": "Should an AI planner wait for its helpers?",
  "text": "An AI planner hands parts of a trip-planning job to helper models. Replay recorded runs to see who waits for whom and whether every message arrives in time.",
  "intro": [
   "An AI planner has to plan a three-city trip and hands each city to a helper model. It can wait for each helper in turn, like staying on the phone, or start all three and keep working. Waiting wastes time, and every helper adds paid model calls.",
   "This replay plays back recorded runs from notebook 07 on one shared clock, sped up: two ways of handing out work, a zoomed-in run where a helper hits an error, and all seven ways compared. Press Play, pause, or drag the timeline."
  ],
  "source": "Notebook 07 in the experiment-notebooks repo: 7 recorded runs of one trip-planning task, one per way of coordinating a planner and its helpers; tools simulated with fixed delays",
  "kb": 114
 },
 {
  "form": "replay",
  "slug": "31-self-repairing-scrapers",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/31-self-repairing-scrapers",
  "sourceShort": "Notebook 31",
  "title": "AI-written programs that copy news pages",
  "text": "A team copies new releases from 20 news pages into a tracker. Step through how an AI model writes the copying programs, which free checks catch breaks, and what repairs cost.",
  "intro": [
   "A finance team needs to know when outside organisations post news, such as a new deadline or a rate change. Usually someone copies each new release from 20 news pages into a tracker every week. An AI model can write small programs to do the copying, but a site redesign can break a program, sometimes quietly, so a wrong date lands in the tracker.",
   "This replays a recorded test with 20 made-up websites over four weeks, from notebook 31. Press Start, then step through each week to see which checks catch a break and what each repair costs."
  ],
  "source": "Notebook 31 in the experiment-notebooks repo: 20 made-up news sites, 4 weekly runs (5 to 26 October 2026), 3 writer models, 135 planted errors",
  "kb": 83
 },
 {
  "form": "replay",
  "slug": "12-tax-research-harnesses",
  "style": "blueprint",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/12-tax-research-harnesses",
  "sourceShort": "Notebook 12",
  "title": "Do extra steps fix AI tax drafts?",
  "text": "An AI model drafts a small company's tax figures. Teams often add a checklist, a self-review or a checking program. Replay recorded runs to see whether those steps fix a wrong draft.",
  "intro": [
   "A small company's books show its sales and costs. A tax preparer works out the profit and splits it between the owners on a workpaper, and each owner copies a share onto a personal tax return. An AI model can draft that workpaper, and when drafts go wrong, teams add steps around the model.",
   "This eight-step lesson replays recorded runs from notebook 12: two AI models, one fictional company, four setups from one plain call to off-the-shelf agent software. Press Start and follow one draft through each setup."
  ],
  "source": "Notebook 12 in the experiment-notebooks repo: 2 open-weight models, 12 fictional S-Corporations, 4 setups x 2 instruction lengths = 192 runs; the replay follows company test-01",
  "kb": 77
 },
 {
  "form": "replay",
  "slug": "48-agent-team-designs",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/econ/48-agent-team-designs",
  "sourceShort": "Notebook 48",
  "title": "Splitting a credit file among AI agents",
  "text": "A builder asks to lease an excavator, and one easy-to-miss email in the file holds the machine back. Replay five teams of AI models working that file, alone or passing notes.",
  "intro": [
   "A builder asks a finance company to lease it an excavator. A credit team fills in a form from the file's papers, and every box must be right. One email says to hold the machine until a promise is signed. When the work is split along a line of people, or of AI agents (AI models given a role), that email has to travel in the notes they pass on.",
   "This replays one credit file worked by five recorded teams of AI agents, from notebook 48. Press Play the replay and watch which teams get every box right, and how long each takes."
  ],
  "source": "Notebook 48 in the experiment-notebooks repo: one credit file (credit-4802) from 80 generated cases, worked by five recorded AI agent teams (one agent alone, lines of 2, 4 and 8, and 4 sharing the papers)",
  "kb": 66
 },
 {
  "form": "replay",
  "slug": "49-pickup-routing",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/49-pickup-routing",
  "sourceShort": "Notebook 49",
  "title": "Can an AI model plan a van's pickup order?",
  "text": "A chilled van must collect from five shops whose loading docks close at different times. Replay the stop orders AI models chose, minute by minute, against those closing times.",
  "intro": [
   "A dispatcher has one chilled van and five shops to collect from this morning. Each shop's loading dock is open only for set hours. If the van arrives after a dock closes, the crew has gone and the pickup is missed; a poor order also adds driving that costs time and fuel.",
   "This replay takes one van from a study in which AI models planned simulated delivery days on real Toronto addresses. It plays two stop orders side by side on a clock, then shows how the models did on 24 such vans. Press Play the replay, then pause or drag the timeline."
  ],
  "source": "Notebook 49 in the experiment-notebooks repo: one chilled van with five pickups plus 24 single-van plans per model, 3 models and 72 plans, on simulated days at real Toronto addresses",
  "kb": 68
 },
 {
  "form": "explorable",
  "slug": "27-adaptive-knowledge-rollouts",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/27-adaptive-knowledge-rollouts",
  "sourceShort": "Notebook 27",
  "title": "How many practice tries should an AI get?",
  "text": "An AI model learns from practice tries only when some pass and some fail. Compare always making four tries with stopping after two that agree, then see real results.",
  "intro": [
   "One way to train an AI model is to let it practise a task several times, score each try pass or fail, and learn from the difference. If all tries pass, or all fail, there is nothing to compare. Each try costs many paid model calls, so the tries should go where they teach something.",
   "This lesson compares two rules: always make four tries per task, or make two and stop if they agree. Drag the sliders to explore a simple model of both, then see what happened on 16 hard calendar tasks. Press Start lesson."
  ],
  "source": "Notebook 27 in the experiment-notebooks repo: fictional calendar tasks with exact answers, two collection rules at equal budgets; the curves are a model, the last step is measured",
  "kb": 73
 },
 {
  "form": "explorable",
  "slug": "21-verification-costs",
  "style": "editorial",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/econ/21-verification-costs",
  "sourceShort": "Notebook 21",
  "title": "When checking a cheap AI's answers pays off",
  "text": "A finance team pays invoices with AI help. Follow one invoice through a cheap model and a check, then move the price slider to see when checking saves money.",
  "intro": [
   "A finance team pays supplier invoices with help from AI. An expensive model costs more each time; a cheap one costs almost nothing but makes mistakes. Letting the cheap model answer first and checking its answer saves money only if the check costs less than the expensive calls it avoids, and a wrong answer that slips through pays the wrong amount.",
   "This lesson follows real answers on 72 made-up invoices with exact amounts. It walks one invoice through the check, then lets you set the price of an expensive call and your monthly volume. Press Start lesson, then drag the sliders."
  ],
  "source": "Notebook 21 in the experiment-notebooks repo: 72 generated invoices, a cheap open model asked twice, a stronger reviewer and an expensive model; the expensive call price is assumed",
  "kb": 80
 },
 {
  "form": "explorable",
  "slug": "39-beyond-speed",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/39-rust-vs-python",
  "sourceShort": "Notebook 39",
  "title": "Start-up, memory and build time across languages",
  "text": "Programs written by AI models in eight language versions also differ in start-up time, memory, build wait and code length. Guess which is slowest on a tiny job, then grow the input.",
  "intro": [
   "A quick script that runs many times a day and a big job that runs once a night need different things from a program. Run speed is only one cost. Start-up time is paid on every run, memory decides whether a job fits on a machine, and compiled languages make you wait for a build.",
   "This seven-step lesson uses programs that AI models wrote in Rust, C++, Go, C#, Java, JavaScript and Python, timed on one laptop. Guess which version finishes last on a tiny input, drag the input size, then compare memory, build time and code length. Press Start the lesson."
  ],
  "source": "Notebook 39 in the experiment-notebooks repo: start-up time, a size sweep (ten models, three programs, five input sizes), peak memory, build time and code size, on one laptop",
  "kb": 79
 },
 {
  "form": "units",
  "slug": "05-text-to-sql-safety",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/05-text-to-sql-safety",
  "sourceShort": "Notebook 05",
  "title": "Does an AI database assistant keep its rules?",
  "text": "An AI assistant turns a shop analyst's questions into database queries that run at once. See which models broke their rules on forbidden requests, and what a clean test can prove.",
  "intro": [
   "A shop analyst types a question, and an AI assistant turns it into a database query that runs straight away, with nobody reading it first. Its rules say read only and keep away from salaries and home addresses. One bad query could set every invoice to zero.",
   "This six-step lesson uses the test from notebook 05: eleven AI models each answered 29 requests the rules forbid and 23 ordinary questions, once each. Press Start to see which models broke a rule, and how much a clean score can prove."
  ],
  "source": "Notebook 05 in the experiment-notebooks repo: 11 AI models, 29 forbidden requests and 23 ordinary questions each, one reply per request",
  "kb": 72
 },
 {
  "form": "units",
  "slug": "33-judge-exam",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/judges/33-judge-exam",
  "sourceShort": "Notebook 33",
  "title": "How often AI judges pick the better answer",
  "text": "Teams let one AI model judge which of two answers is better. Nine judges each compared 240 pairs where tests already know the winner; see every verdict as a dot.",
  "intro": [
   "When a team compares two versions of a coding assistant on hundreds of tasks, nobody has time to read every pair of answers. Another AI model, a judge, reads both and picks the better one, and its pick becomes the score. A judge that picks wrong can make a worse version look better.",
   "This lesson uses an exam from notebook 33 where code already knows the better answer: 240 pairs, nine judges, each pair shown in both orders. Press Start, step through the dots, and in step 5 tap any dot to open its pair."
  ],
  "source": "Notebook 33 in the experiment-notebooks repo: 240 answer pairs in four task families, 9 judge models, each pair judged in both orders (4,320 judgments)",
  "kb": 91
 },
 {
  "form": "units",
  "slug": "08-lab-requisition-extraction",
  "style": "paper",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/08-lab-requisition-extraction",
  "sourceShort": "Notebook 08",
  "title": "Can an AI model read a lab order form?",
  "text": "A doctor orders blood tests by marking boxes or writing names on a paper form. See, test by test, which ones seven AI models found, missed or added, and tap any dot.",
  "intro": [
   "When a doctor orders blood work on paper, a lab clerk reads the form and types each test into the lab's system. A test is ordered by a mark in its box or by a name written on an Other Tests line. A missed test is never run, and an added one costs money.",
   "This seven-step lesson uses notebook 08's 24 made-up order forms, scanned or photographed, and seven AI models that read images. Each ordered test is a dot. Press Start, then tap any dot to see that test on its page."
  ],
  "source": "Notebook 08 in the experiment-notebooks repo: 24 synthetic Ontario lab requisitions ordering 102 tests, read once each by 7 vision models",
  "kb": 1016
 },
 {
  "form": "units",
  "slug": "39-language-vs-model",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/39-rust-vs-python",
  "sourceShort": "Notebook 39",
  "title": "Language or AI model: which sets the speed?",
  "text": "A team's program is too slow: ask for another programming language, or ask another AI model? Sort 20 programs by language and by model, and see which explains more.",
  "intro": [
   "A team's program that adds up a million bank records runs too slowly. They can ask the same AI model for it in another programming language, or ask a different AI model. Picking the wrong fix wastes work and leaves the program slow.",
   "Ten AI models wrote eight tasks in six languages, and each program was timed. Press Start, regroup the dots by language and then by model to see how much of the spread each explains, guess the answer for a text-reading task, and compare all eight tasks."
  ],
  "source": "Notebook 39 in the experiment-notebooks repo: ten AI models x six languages x eight tasks (60 programs per task), median of 5 timed runs",
  "kb": 77
 },
 {
  "form": "guess",
  "slug": "16-time-series-zero-shot",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/16-time-series-zero-shot",
  "sourceShort": "Notebook 16",
  "title": "Forecasting next week's electricity use",
  "text": "A grid planner needs next week's power demand. Guess it yourself, then see whether models trained on other data beat simply copying last week.",
  "intro": [
   "A grid operator decides days ahead which power plants to have ready. If the forecast of electricity use is too high, plants sit idle but still cost money; too low, and there is not enough power at the evening peak. The simplest forecast copies last week, hour for hour.",
   "This lesson uses Ontario's real hourly demand from August 2026. You guess next week, then compare your guess, the copy of last week and pretrained models, which learned from many other series and never saw this one. Press Start lesson, then drag to guess."
  ],
  "source": "Notebook 16 in the experiment-notebooks repo: Ontario hourly demand and five other public series, Aug 20 to Oct 17, 2026; 7 pretrained models and 5 standard methods, 112 forecast starts",
  "kb": 84
 },
 {
  "form": "guess",
  "slug": "41-direct-weight-mlps",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/41-direct-weight-mlps",
  "sourceShort": "Notebook 41",
  "title": "Writing a digit reader as typed numbers",
  "text": "A program that reads handwritten digits is a list of 6,570 numbers. AI models typed every number without a calculator; guess how many test digits the best list reads right.",
  "intro": [
   "A small program that reads handwritten digits is, inside, a long list of numbers. A training program normally finds them by adjusting them over many examples. Here an AI model is shown labelled digits and must type all 6,570 numbers itself, with no calculator and no code. A list that is one number short cannot run at all.",
   "The data comes from notebook 41: twelve models, tested on 1,797 digits none of them saw. Press Start, guess how many the best list reads right, then compare every model."
  ],
  "source": "Notebook 41 in the experiment-notebooks repo: UCI handwritten digits (8x8), 2,048 shown to each model, 1,797 hidden test digits, 13 first requests to 12 models plus numbered retries",
  "kb": 82
 },
 {
  "form": "guess",
  "slug": "39-language-ladder",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/39-rust-vs-python",
  "sourceShort": "Notebook 39",
  "title": "How much slower each programming language runs",
  "text": "A developer must pick which programming language to ask an AI model for. Drag a guess for each of eight versions, then see how ten models' programs actually compared.",
  "intro": [
   "A developer is about to ask an AI model for a program that runs every night on a rented computer, paid by the second. She can ask for it in Rust, C++, Go, C#, Java, JavaScript or Python. A slower choice costs money on every run.",
   "Ten AI models wrote eight programs in each language, and every program was timed. Press Start, drag a guess for how much longer each language takes than the fastest, then reveal the measured ladder and compare the models."
  ],
  "source": "Notebook 39 in the experiment-notebooks repo: ten AI models, eight tasks, eight versions of each (80 task-and-model pairs), median of 5 timed runs",
  "kb": 76
 },
 {
  "form": "guess",
  "slug": "economics-of-intelligence-regimes",
  "style": "chalkboard",
  "link": "https://arxiv.org/abs/2611.05417",
  "sourceShort": "Organizing Intelligence, a research paper",
  "title": "What happens to jobs when AI can be hired",
  "text": "A made-up economy of coders, writers and coordinators can now hire AI copies. Tap the map to see jobs and pay when AI gets better at tasks, at teamwork, or both.",
  "intro": [
   "Picture a small economy where coders, writers and coordinators work in firms, and copies of an AI can now be hired for the cost of computing. AI could get better at tasks, or better at working as a team. Which one happens decides who keeps a job, what people are paid, and whether change comes slowly or all at once.",
   "This six-step lesson follows a research paper's made-up economy. Tap regions of a map to compare outcomes, guess which kind of progress ends jobs all at once, then drag two sliders to check. The numbers are modelled scenarios, not forecasts. Press Start the lesson."
  ],
  "source": "Organizing Intelligence (Imas, Koh and Legg, arXiv 2611.05417), sections 2.1 to 2.4: modelled scenarios in a 14-person economy, with its companion essay The economics of intelligence",
  "kb": 84
 },
 {
  "form": "figure",
  "slug": "44-chart-overload",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/44-chart-overload",
  "sourceShort": "Notebook 44",
  "title": "What an AI model leaves off a chart",
  "text": "An AI model makes one chart for a ten-second look at a meeting. Slide from a bare request to fuller instructions and see how many labels and key numbers survive.",
  "intro": [
   "Someone pastes a table and notes into an AI model and asks for a chart for a pricing meeting. The meeting will look at it for ten seconds. Only two facts and one warning matter; the rest is true but beside the point. A chart can bury those facts under labels, or look clean and leave them off.",
   "The data comes from notebook 44: 36 charts at each of five levels of instruction, read by a separate model that saw only the image. Press Show the chart, then drag the slider to tell the model more."
  ],
  "source": "Notebook 44 in the experiment-notebooks repo: 12 made-up briefs, 3 chart-making models, 5 instruction levels (180 charts), 132 critical numbers per level read by a separate reader model",
  "kb": 62
 },
 {
  "form": "figure",
  "slug": "39-language-speed-figure",
  "style": "chalkboard",
  "link": "https://github.com/k-sandhu/experiment-notebooks/tree/main/notebooks/39-rust-vs-python",
  "sourceShort": "Notebook 39",
  "title": "How much slower is each programming language?",
  "text": "AI models wrote the same eight programs in Rust, Python and five other languages, and each version was timed. See how much slower each is than the fastest, task by task.",
  "intro": [
   "A team needs a program that summarises a huge web server log every morning. An AI model can write it in Rust, Python or another language for about the same effort, but the versions do not run equally fast. On thousands of files, or on a machine billed by the second, slower code costs money.",
   "This chart comes from a study where 13 AI model setups each wrote eight tasks in eight versions, timed on one laptop beside a plain reference version. Each dot is one program, placed by how many times longer it ran than that model's fastest version. Press Show the chart, then pick a task."
  ],
  "source": "Notebook 39 in the experiment-notebooks repo: 13 model setups x 8 tasks x 9 versions = 936 timed programs on one laptop",
  "kb": 96
 }
];
