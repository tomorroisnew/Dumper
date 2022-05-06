import "frida-il2cpp-bridge";

function myFunc(): void {
    Il2Cpp.perform(() => {
        Il2Cpp.dump("dump");
    });
}

setTimeout(myFunc, 0);