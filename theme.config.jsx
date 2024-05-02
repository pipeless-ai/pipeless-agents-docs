import Image from "next/image"

export default {
    logo: <div className="flex items-center gap-4 font-bold"><Image src="/logo.png" width={50} height={50} /><span>Pipeless Agents</span></div>,
    logoLink: 'https://agents.pipeless.ai',
    project: {
      link: 'https://github.com/pipeless-ai/pipeless-agents-docs'
    },
    docsRepositoryBase: 'https://github.com/pipeless-ai/pipeless-agents-docs/tree/main/docs',
    footer: {
        text: (
          <span>
            Copyright {new Date().getFullYear()} ©{' '}
            <a href="https://agents.pipeless.ai" target="_blank">
              Pipeless, Inc.
            </a>
          </span>
        )
      }
}
