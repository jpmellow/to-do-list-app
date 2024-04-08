import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const ContactFormSchema = z.object({
    email: z.string().min(1, "Email is required"),
    name: z.string().min(1, "Name is required"),
    message: z.string().max(100, "max message is 100 characters long"),
    age: z.strong().min(18, "Only legal adults may submit")
})

export function ContactForm () {
    const form = useForm({
        defaultValues: {},
    });

    const handleSend = (data) => {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={(form.}
        </div>

        <div>
            <label>Email</label>
            <input {...form.register("email")} />
        </div>

        <div>
        <label>Name</label>
        <input {...form.register("name")} />
        </div>

        <div>
        <label>Message</label>
        <input {...form.register("message")} />
        </div>
    )

}