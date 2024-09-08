"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const description = "A pie chart with percentage values and custom colors"

const chartData = [
    { religion: "Islam", percentage: 86.93, fill: "#4CAF50" },
    { religion: "Kristen", percentage: 7.47, fill: "#2196F3" },
    { religion: "Katolik", percentage: 3.08, fill: "#FF9800" },
    { religion: "Hindu", percentage: 1.71, fill: "#FFC107" },
    { religion: "Buddha", percentage: 0.74, fill: "#9C27B0" },
    { religion: "Konghuchu", percentage: 0.05, fill: "#E91E63" },
    { religion: "Kepercayaan Lainnya", percentage: 0.03, fill: "#795548" },
]

const chartConfig = {
    percentage: {
        label: "Percentage",
    },
    islam: {
        label: "Islam",
        color: "#4CAF50",
    },
    kristen: {
        label: "Kristen",
        color: "#2196F3",
    },
    katolik: {
        label: "Katolik",
        color: "#FF9800",
    },
    hindu: {
        label: "Hindu",
        color: "#FFC107",
    },
    buddha: {
        label: "Buddha",
        color: "#9C27B0",
    },
    konghuchu: {
        label: "Konghuchu",
        color: "#E91E63",
    },
    kepercayaan: {
        label: "Kepercayaan",
        color: "#795548",
    },
}

export function Chart() {
    return (
        <Card className="flex flex-col shadow-xl shadow-gray-500">
            <CardHeader className="items-center pb-0">
                <CardTitle className="text-center text-3xl font-bold">Persentase Persebaran Agama dan Kepercayaan di Indonesia</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[500px]"
                >
                    <PieChart className="w-[10rem]">
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="percentage"
                            nameKey="religion"
                            stroke="0"
                            isAnimationActive={false}
                        />
                    </PieChart>
                </ChartContainer>
                <div className="mt-4 flex flex-wrap justify-center gap-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="mt-2 mb-5" variant="islam">Islam</Button>
                        </DialogTrigger>
                        <DialogContent style={{ background: "#4CAF50" }} className="border-none">
                            <DialogHeader>
                                <div className="flex items-center justify-center">
                                    <Image src="/agama/islam.jpg" alt="Islam" width={300} height={100} className="rounded-lg mb-10" />
                                </div>
                                <DialogTitle className="text-black font-bold text-2xl font-serif">Agama Islam</DialogTitle>
                            </DialogHeader>
                            <div className="rounded-lg bg-white p-5">
                                <p className="text-black font-bold text-lg font-serif">
                                    • Persentase persebaran: 86.93%
                                </p>
                                <p className="text-black font-bold text-lg font-serif">
                                    • Salam: Assalamu'alaikum
                                </p>
                                <p className="text-black font-bold text-lg font-serif">
                                    • Artinya: "Semoga keselamatan tercurah kepada kamu."
                                </p>
                                <p className="text-black font-bold text-lg font-serif">
                                    • Jawaban dari salam: Wa'alaikumussalam (Dan semoga keselamatan tercurah juga kepadamu).
                                </p>
                            </div>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="mt-2 mb-5" variant="kristen">Kristen</Button>
                        </DialogTrigger>
                        <DialogContent style={{ background: "#2196F3" }} className="border-none">
                            <DialogHeader>
                                <div className="flex items-center justify-center">
                                    <Image src="/agama/kristen.jpeg" alt="Kristen" width={300} height={100} className="rounded-lg mb-10" />
                                </div>
                                <DialogTitle className="text-white font-bold text-2xl font-serif">Agama Kristen</DialogTitle>
                            </DialogHeader>
                            <div className="rounded-lg bg-white p-5">
                                <p className="text-black font-bold text-lg font-serif">
                                    • Persentase persebaran: 7.47%
                                </p>
                                <p className="text-black font-bold text-lg font-serif">
                                    • Salam: Shalom
                                </p>
                                <p className="text-black font-bold text-lg font-serif">
                                    • Artinya: "Damai sejahtera."
                                </p>
                                <p className="text-black font-bold text-lg font-serif">
                                    • Penggunaan: Salam ini sering digunakan dalam konteks gereja dan pertemuan umat Kristen.
                                </p>
                            </div>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="mt-2 mb-5" variant="katolik">Katolik</Button>
                        </DialogTrigger>
                        <DialogContent style={{ background: "#FF9800" }} className="border-none">
                            <DialogHeader>
                                <div className="flex items-center justify-center">
                                    <Image src="/agama/katolik.jpeg" alt="Katolik" width={300} height={100} className="rounded-lg mb-10" />
                                </div>
                                <DialogTitle className="text-white font-bold text-2xl font-serif">Agama Katolik</DialogTitle>
                            </DialogHeader>
                            <div className="rounded-lg bg-white p-5">
                                <p className="text-black font-bold text-lg font-serif">
                                    • Persentase persebaran: 3.08%
                                </p>
                                <p className="text-black font-bold text-lg font-serif">
                                    • Salam: Damai Tuhan besertamu
                                </p>
                                <p className="text-black font-bold text-lg font-serif">
                                    • Artinya: Umumnya diucapkan dalam misa atau pertemuan gereja, dan dijawab dengan Dan beserta rohmu
                                </p>
                            </div>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="mt-2 mb-5" variant="hindu">Hindu</Button>
                        </DialogTrigger>
                        <DialogContent style={{ background: "#FFC107" }} className="border-none">
                            <DialogHeader>
                                <div className="flex items-center justify-center">
                                    <Image src="/agama/hindu.jpg" alt="Hindu" width={300} height={100} className="rounded-lg mb-10" />
                                </div>
                                <DialogTitle className="text-black font-bold text-2xl font-serif">Agama Hindu</DialogTitle>
                            </DialogHeader>
                            <div className="rounded-lg bg-white p-5">
                                <p className="text-black font-bold text-lg font-serif">
                                    • Persentase persebaran: 1.71%
                                </p>
                                <p className="text-black font-bold text-lg font-serif">
                                    • Salam: Om Swastiastu
                                </p>
                                <p className="text-black font-bold text-lg font-serif">
                                    • Artinya: "Semoga semuanya berada dalam keadaan baik atas rahmat Tuhan."
                                </p>
                                <p className="text-black font-bold text-lg font-serif">
                                    • Penggunaan: Ucapan ini biasa digunakan di Bali dan dijawab dengan Om Shanti, Shanti, Shanti Om yang berarti "Damai, damai, damai."
                                </p>
                            </div>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="mt-2 mb-5" variant="buddha">Buddha</Button>
                        </DialogTrigger>
                        <DialogContent style={{ background: "#9C27B0" }} className="border-none">
                            <DialogHeader>
                                <div className="flex items-center justify-center">
                                    <Image src="/agama/buddha.webp" alt="Buddha" width={300} height={100} className="rounded-lg mb-10" />
                                </div>
                                <DialogTitle className="text-white font-bold text-2xl font-serif">Agama Buddha</DialogTitle>
                            </DialogHeader>
                            <div className="rounded-lg bg-white p-5">
                                <p className="text-black font-bold text-lg font-serif">
                                    • Persentase persebaran: 0.74%
                                </p>
                                <p className="text-black font-bold text-lg font-serif">
                                    • Salam: Namo Buddhaya
                                </p>
                                <p className="text-black font-bold text-lg font-serif">
                                    • Artinya: "Salam kepada Buddha."
                                </p>
                                <p className="text-black font-bold text-lg font-serif">
                                    • Penggunaan: Digunakan sebagai salam atau penghormatan.
                                </p>
                            </div>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="mt-2 mb-5" variant="konghuchu">Konghuchu</Button>
                        </DialogTrigger>
                        <DialogContent style={{ background: "#E91E63" }} className="border-none">
                            <DialogHeader>
                                <div className="flex items-center justify-center">
                                    <Image src="/agama/konghucu.png" alt="Konghuchu" width={300} height={100} className="rounded-lg mb-10" />
                                </div>
                                <DialogTitle className="text-white font-bold text-2xl font-serif">Agama Konghuchu</DialogTitle>
                            </DialogHeader>
                            <div className="rounded-lg bg-white p-5">
                                <p className="text-black font-bold text-lg font-serif">
                                    • Persentase persebaran: 0.05%
                                </p>
                                <p className="text-black font-bold text-lg font-serif">
                                    • Salam: Wejangan Kongzi atau Li Bai
                                </p>
                                <p className="text-black font-bold text-lg font-serif">
                                    • Artinya: Salam hormat yang umumnya digunakan dalam pertemuan-pertemuan formal atau ibadah, yang artinya adalah hormat kepada ajaran Kongzi (Konfusius).
                                </p>
                            </div>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="mt-2 mb-5" variant="kepercayaan">Kepercayaan Lainnya</Button>
                        </DialogTrigger>
                        <DialogContent style={{ background: "#795548" }} className="border-none">
                            <DialogHeader>
                                <div className="flex items-center justify-center">
                                    <Image src="/agama/kejawen.jpeg" alt="Kepercayaan" width={300} height={100} className="rounded-lg mb-10" />
                                </div>
                                <DialogTitle className="text-white font-bold text-2xl font-serif">Kepercayaan Lainnya</DialogTitle>
                            </DialogHeader>
                            <div className="rounded-lg bg-white p-5">
                                <p className="text-black font-bold text-lg font-serif">
                                    • Persentase persebaran: 0.03%
                                </p>
                                <p className="text-black font-bold text-lg font-serif">
                                    • Salam: Pada kepercayaan lainnya, salam tidak terikat pada agama tertentu. Namun yang sering digunakan untuk salam dari kepercaayan ini adalah "Salam Kebajikan"
                                </p>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </CardContent>
        </Card>
    )
}
