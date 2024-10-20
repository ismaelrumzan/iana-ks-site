// components/mdx-remote.js
import { MDXRemote } from "next-mdx-remote/rsc";
import { ShieldCheck, FileInput, Info } from "lucide-react";
import { Button, Alert } from "flowbite-react";

export function CustomMDX(props) {
  const components = {
    CTAButton: (props) => (
      <Button
        className="uppercase bg-[#275C26] hover:bg-[#559553]"
        href={props.link}>
        {props.text}
        {props.icon === "apply" && <FileInput className="ml-2 h-5 w-5" />}
        {props.icon === "info" && <Info className="ml-2 h-5 w-5" />}
        {props.icon === "security" && <ShieldCheck className="ml-2 h-5 w-5" />}
      </Button>
    ),
    Alert: (props) => (
      <div className="not-prose">
        <Alert color={props.type}>{props.children}</Alert>
      </div>
    ),
  };
  return <MDXRemote {...props} components={components} />;
}
