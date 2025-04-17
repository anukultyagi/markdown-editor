import React from 'react'
import { motion } from 'framer-motion'

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

const GuidePage = () => {
    return (
        <div className="max-w-3xl mx-auto p-6 text-zinc-800 dark:text-zinc-300">
            <motion.h1
                className="text-3xl font-bold mb-4"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                📝 Markdown Guide
            </motion.h1>

            {sections.map((section, i) => (
                <motion.section
                    key={i}
                    className="mb-6"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                    <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                    {section.description && <p className="text-base">{section.description}</p>}
                    {section.examples && section.examples.map((example, j) => (
                        <div key={j} className="mb-2">
                            {example.label && <p className="font-medium">{example.label}</p>}
                            <pre className="bg-zinc-800 text-white p-3 rounded whitespace-pre-wrap">
                                {example.code}
                            </pre>
                        </div>
                    ))}
                </motion.section>
            ))}
        </div>
    )
}

const sections = [
    {
        title: '✍️ What is Markdown?',
        description: 'Markdown is a lightweight markup language that lets you format text using plain syntax. It’s perfect for writing documentation, notes, and more.',
    },
    {
        title: '🔡 Headings',
        examples: [{ code: `# H1\n## H2\n### H3` }],
    },
    {
        title: '🧾 Text Formatting',
        examples: [{ code: `**bold**\n*italic*\n~~strikethrough~~` }],
    },
    {
        title: '🔗 Links',
        examples: [{ code: `[Google](https://www.google.com)` }],
    },
    {
        title: '📸 Images',
        examples: [{ code: `![Alt Text](https://example.com/image.jpg)` }],
    },
    {
        title: '📋 Lists',
        examples: [
            { label: 'Unordered:', code: `- Item 1\n- Item 2\n  - Nested Item` },
            { label: 'Ordered:', code: `1. First\n2. Second` }
        ],
    },
    {
        title: '💻 Code',
        examples: [
            { label: 'Inline:', code: '`inline code`' },
            {
                label: 'Code Block:', code:
                    `\`\`\`\nfunction helloWorld() {\n  console.log("Hello, world!");\n}\n\`\`\``
            },
        ]
    },
    {
        title: '📑 Blockquote',
        examples: [{ code: `> This is a quote.` }],
    },
    {
        title: '✅ Task List',
        examples: [{ code: `- [x] Completed Task\n- [ ] Pending Task` }],
    },
]

export default GuidePage
