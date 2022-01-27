import React, { useState } from 'react';
import A from './image/A.jpg';
import B from './image/B.jpg';
import C from './image/C.jpg';
import D from './image/D.jpg';
import E from './image/E.jpg';
import F from './image/F.jpg';
import G from './image/G.jpg';
import H from './image/H.jpg';
import I from './image/I.jpg';
import J from './image/J.jpg';
import K from './image/K.jpg';
import L from './image/L.jpg';
import M from './image/M.jpg';
import N from './image/N.jpg';
import O from './image/O.jpg';
import P from './image/P.jpg';
import Q from './image/Q.jpg';
import R from './image/R.jpg';
import S from './image/S.jpg';
import T from './image/T.jpg';
import U from './image/U.jpg';
import V from './image/V.jpg';
import W from './image/W.jpg';
import X from './image/X.jpg';
import Y from './image/Y.jpg';
import Z from './image/Z.jpg';


export default function App() {
	const questions1 = [
		{
			questionText: 'Which one is A?',
			answerOptions: [
				{ answerText: A, isCorrect: true },
				{ answerText: V, isCorrect: false },
				{ answerText: C, isCorrect: false },
				{ answerText: E, isCorrect: false },
			],
		},
		{
			questionText: 'Which one is M?',
			answerOptions: [
				{ answerText: D, isCorrect: false },
				{ answerText: N, isCorrect: false },
				{ answerText: M, isCorrect: true },
				{ answerText: Q, isCorrect: false },
			],
		},
		{
			questionText: 'Which one is P?',
			answerOptions: [
				{ answerText: D, isCorrect: false },
				{ answerText: B, isCorrect: false },
				{ answerText: Q, isCorrect: false },
				{ answerText: P, isCorrect: true },
			],
		},
		{
			questionText: 'Which one is D?',
			answerOptions: [
				{ answerText: A, isCorrect: false },
				{ answerText: D, isCorrect: true },
				{ answerText: P, isCorrect: false },
				{ answerText: B, isCorrect: false },
			],
		},
		{
			questionText: 'Which one is K?',
			answerOptions: [
				{ answerText: X, isCorrect: false },
				{ answerText: W, isCorrect: false },
				{ answerText: K, isCorrect: true },
				{ answerText: V, isCorrect: false },
			],
		},
	];


	const questions2 = [
		{
			questionText: 'Guess sign for B',
			answerOptions: [
				{ answerText: D, isCorrect: false },
				{ answerText: A, isCorrect: false },
				{ answerText: B, isCorrect: true },
				{ answerText: R, isCorrect: false },
			],
		},
		{
			questionText: 'Guess sign for F',
			answerOptions: [
				{ answerText: F, isCorrect: true },
				{ answerText: Q, isCorrect: false },
				{ answerText: R, isCorrect: false },
				{ answerText: S, isCorrect: false },
			],
		},
		{
			questionText: 'Guess sign for I',
			answerOptions: [
				{ answerText: H, isCorrect: false },
				{ answerText: K, isCorrect: false },
				{ answerText: L, isCorrect: false },
				{ answerText: I, isCorrect: true },
			],
		},
		{
			questionText: 'Guess sign for O',
			answerOptions: [
				{ answerText: A, isCorrect: false },
				{ answerText: O, isCorrect: true },
				{ answerText: P, isCorrect: false },
				{ answerText: R, isCorrect: false },
			],
		},
		{
			questionText: 'Guess sign for T',
			answerOptions: [
				{ answerText: T, isCorrect: true },
				{ answerText: N, isCorrect: false },
				{ answerText: F, isCorrect: false },
				{ answerText: G, isCorrect: false },
			],
		},
	];


	const questions3 = [
		{
			questionText: 'Which one is E?',
			answerOptions: [
				{ answerText: F, isCorrect: false },
				{ answerText: J, isCorrect: false },
				{ answerText: G, isCorrect: false },
				{ answerText: E, isCorrect: true },
			],
		},
		{
			questionText: 'Which one is J?',
			answerOptions: [
				{ answerText: A, isCorrect: false },
				{ answerText: J, isCorrect: true },
				{ answerText: I, isCorrect: false },
				{ answerText: M, isCorrect: false },
			],
		},
		{
			questionText: 'Which one is L?',
			answerOptions: [
				{ answerText: L, isCorrect: true },
				{ answerText: G, isCorrect: false },
				{ answerText: D, isCorrect: false },
				{ answerText: E, isCorrect: false },
			],
		},
		{
			questionText: 'Which one is R?',
			answerOptions: [
				{ answerText: P, isCorrect: false },
				{ answerText: R, isCorrect: true },
				{ answerText: Q, isCorrect: false },
				{ answerText: S, isCorrect: false },
			],
		},
		{
			questionText: 'Which one is U?',
			answerOptions: [
				{ answerText: A, isCorrect: false },
				{ answerText: V, isCorrect: false },
				{ answerText: U, isCorrect: true },
				{ answerText: W, isCorrect: false },
			],
		},
	];


	const questions4 = [
		{
			questionText: 'Which one is C?',
			answerOptions: [
				{ answerText: F, isCorrect: false },
				{ answerText: C, isCorrect: true },
				{ answerText: X, isCorrect: false },
				{ answerText: Z, isCorrect: false },
			],
		},
		{
			questionText: 'Which one is G?',
			answerOptions: [
				{ answerText: C, isCorrect: false },
				{ answerText: R, isCorrect: false },
				{ answerText: G, isCorrect: true },
				{ answerText: S, isCorrect: false },
			],
		},
		{
			questionText: 'Which one is H?',
			answerOptions: [
				{ answerText: H, isCorrect: true },
				{ answerText: I, isCorrect: false },
				{ answerText: J, isCorrect: false },
				{ answerText: B, isCorrect: false },
			],
		},
		{
			questionText: 'Which one is V?',
			answerOptions: [
				{ answerText: V, isCorrect: true },
				{ answerText: U, isCorrect: false },
				{ answerText: W, isCorrect: false },
				{ answerText: Y, isCorrect: false },
			],
		},
		{
			questionText: 'Which one is Z?',
			answerOptions: [
				{ answerText: S, isCorrect: false },
				{ answerText: Z, isCorrect: true },
				{ answerText: U, isCorrect: false },
				{ answerText: Y, isCorrect: false },
			],
		},
	];


	const questions5 = [
		{
			questionText: 'Guess sign for N',
			answerOptions: [
				{ answerText: M, isCorrect: false },
				{ answerText: W, isCorrect: false },
				{ answerText: H, isCorrect: false },
				{ answerText: N, isCorrect: true },
			],
		},
		{
			questionText: 'Guess sign for S',
			answerOptions: [
				{ answerText: A, isCorrect: false },
				{ answerText: I, isCorrect: false },
				{ answerText: Z, isCorrect: false },
				{ answerText: S, isCorrect: true },
			],
		},
		{
			questionText: 'Guess sign for W',
			answerOptions: [
				{ answerText: U, isCorrect: false },
				{ answerText: W, isCorrect: true },
				{ answerText: V, isCorrect: false },
				{ answerText: Y, isCorrect: false },
			],
		},
		{
			questionText: 'Guess sign for Y',
			answerOptions: [
				{ answerText: W, isCorrect: false },
				{ answerText: V, isCorrect: false },
				{ answerText: Y, isCorrect: true },
				{ answerText: U, isCorrect: false },
			],
		},
		{
			questionText: 'Guess sign for X',
			answerOptions: [
				{ answerText: X, isCorrect: true },
				{ answerText: A, isCorrect: false },
				{ answerText: Q, isCorrect: false },
				{ answerText: N, isCorrect: false },
			],
		},
	];


	var randomnumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
	//console.log(randomnumber);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState();
	const [score, setScore] = useState(0);

	if(randomnumber===1)
	{
		const handleAnswerOptionClick = (isCorrect) => {
			if (isCorrect) {
				setScore(score + 1);
			}
	
			const nextQuestion = currentQuestion + 1;
			if (nextQuestion < questions1.length) {
				setCurrentQuestion(nextQuestion);
			} else {
				setShowScore(true);
			}
		};
		return (
			<div className='app'>
				{showScore ? (
					<div className='score-section'>
						You scored {score} out of {questions1.length}
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions1.length}
							</div>
							<div className='question-text'>{questions1[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions1[currentQuestion].answerOptions.map((answerOption) => (
								<div key={answerOption.answerText}>
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}><img src={answerOption.answerText} alt="img" /></button>
								</div>
							))}
						</div>
					</>
				)}
			</div>
		);
	}

	if(randomnumber===2)
	{
		const handleAnswerOptionClick = (isCorrect) => {
			if (isCorrect) {
				setScore(score + 1);
			}
	
			const nextQuestion = currentQuestion + 1;
			if (nextQuestion < questions2.length) {
				setCurrentQuestion(nextQuestion);
			} else {
				setShowScore(true);
			}
		};
		return (
			<div className='app'>
				{showScore ? (
					<div className='score-section'>
						You scored {score} out of {questions2.length}
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions2.length}
							</div>
							<div className='question-text'>{questions2[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions2[currentQuestion].answerOptions.map((answerOption) => (
								<div key={answerOption.answerText}>
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}><img src={answerOption.answerText} alt="img" /></button>
								</div>
							))}
						</div>
					</>
				)}
			</div>
		);
	}

	if(randomnumber===3)
	{
		const handleAnswerOptionClick = (isCorrect) => {
			if (isCorrect) {
				setScore(score + 1);
			}
	
			const nextQuestion = currentQuestion + 1;
			if (nextQuestion < questions3.length) {
				setCurrentQuestion(nextQuestion);
			} else {
				setShowScore(true);
			}
		};
		return (
			<div className='app'>
				{showScore ? (
					<div className='score-section'>
						You scored {score} out of {questions3.length}
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions3.length}
							</div>
							<div className='question-text'>{questions3[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions3[currentQuestion].answerOptions.map((answerOption) => (
								<div key={answerOption.answerText}>
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}><img src={answerOption.answerText} alt="img" /></button>
								</div>
							))}
						</div>
					</>
				)}
			</div>
		);
	}

	if(randomnumber===4)
	{
		const handleAnswerOptionClick = (isCorrect) => {
			if (isCorrect) {
				setScore(score + 1);
			}
	
			const nextQuestion = currentQuestion + 1;
			if (nextQuestion < questions4.length) {
				setCurrentQuestion(nextQuestion);
			} else {
				setShowScore(true);
			}
		};
		return (
			<div className='app'>
				{showScore ? (
					<div className='score-section'>
						You scored {score} out of {questions4.length}
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions4.length}
							</div>
							<div className='question-text'>{questions4[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions4[currentQuestion].answerOptions.map((answerOption) => (
								<div key={answerOption.answerText}>
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}><img src={answerOption.answerText} alt="img" /></button>
								</div>
							))}
						</div>
					</>
				)}
			</div>
		);
	}

	if(randomnumber===5)
	{
		const handleAnswerOptionClick = (isCorrect) => {
			if (isCorrect) {
				setScore(score + 1);
			}
	
			const nextQuestion = currentQuestion + 1;
			if (nextQuestion < questions5.length) {
				setCurrentQuestion(nextQuestion);
			} else {
				setShowScore(true);
			}
		};
		return (
			<div className='app'>
				{showScore ? (
					<div className='score-section'>
						You scored {score} out of {questions5.length}
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions5.length}
							</div>
							<div className='question-text'>{questions5[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions5[currentQuestion].answerOptions.map((answerOption) => (
								<div key={answerOption.answerText}>
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}><img src={answerOption.answerText} alt="img" /></button>
								</div>
							))}
						</div>
					</>
				)}
			</div>
		);
	}
	
}
