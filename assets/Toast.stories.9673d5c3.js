var i=Object.defineProperty;var a=(o,t)=>i(o,"name",{value:t,configurable:!0});import{d as n,a as d}from"./index.6028a791.js";import{j as e,a as p}from"./jsx-runtime.440b4f84.js";import{ao as c}from"./iframe.2452ef87.js";import"./index.17e11d16.js";import"./index.bb249f92.js";const f={parameters:{storySource:{source:`import type { Meta } from '@storybook/react'
import { Button, Toast, ToastRootProps } from '@omn-ui/react'
import { useArgs } from '@storybook/client-api';

export default {
    title: 'Form/Toast',
    component: Toast.Root,

    args: {
        open: false,
        onOpenChange: () => { }

    },
    argTypes: {
        open: {
            type: 'boolean',
        },
        children: {
            control: {
                type: null
            }
        }

    },
    decorators: [
        (Story) => {
            return (
                <Toast.Provider>
                    {Story()}
                </Toast.Provider>

            )
        }
    ]
} as Meta<ToastRootProps>

export const Playground = ({ onOpenChange, ...args }: any) => {
    const [{ open }, updateArgs] = useArgs();
    const handleClose = () => updateArgs({ open: !open });

    return (
        <div>
            <Button onClick={() => updateArgs({ open: !open })}>Open Toast</Button>
            <Toast.Root
                onOpenChange={handleClose}
                open={open}
                {...args}
            >
                <Toast.Title>Agendamento realizado</Toast.Title>
                <Toast.Description>Quarta-feira, 23 de Outubro as 16h</Toast.Description>

            </Toast.Root>
        </div>
    );
};

`,locationsMap:{playground:{startLoc:{col:26,line:37},endLoc:{col:1,line:55},startBody:{col:26,line:37},endBody:{col:1,line:55}}}}},title:"Form/Toast",component:n.Root,args:{open:!1,onOpenChange:()=>{}},argTypes:{open:{type:"boolean"},children:{control:{type:null}}},decorators:[o=>e(n.Provider,{children:o()})]},C=a(({onOpenChange:o,...t})=>{const[{open:r},s]=c(),l=a(()=>s({open:!r}),"handleClose");return p("div",{children:[e(d,{onClick:()=>s({open:!r}),children:"Open Toast"}),p(n.Root,{onOpenChange:l,open:r,...t,children:[e(n.Title,{children:"Agendamento realizado"}),e(n.Description,{children:"Quarta-feira, 23 de Outubro as 16h"})]})]})},"Playground"),O=["Playground"];export{C as Playground,O as __namedExportsOrder,f as default};
//# sourceMappingURL=Toast.stories.9673d5c3.js.map
