import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: "smartphones" | "headphones" | "accessories";
  image: string;
  rating: number;
  reviews: number;
  specs: {
    [key: string]: string;
  };
}

const products: Product[] = [
  {
    id: 1,
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 79990,
    originalPrice: 89990,
    category: "smartphones",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 1247,
    specs: {
      Экран: '6.8" Dynamic AMOLED',
      Процессор: "Snapdragon 8 Gen 3",
      Память: "256GB / 12GB RAM",
      Камера: "200MP + 50MP + 10MP",
      Батарея: "5000mAh",
      ОС: "Android 14",
    },
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 99990,
    category: "smartphones",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 2156,
    specs: {
      Экран: '6.1" Super Retina XDR',
      Процессор: "A17 Pro",
      Память: "256GB / 8GB RAM",
      Камера: "48MP + 12MP + 12MP",
      Батарея: "3274mAh",
      ОС: "iOS 17",
    },
  },
  {
    id: 3,
    name: "AirPods Pro 2",
    brand: "Apple",
    price: 24990,
    originalPrice: 29990,
    category: "headphones",
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 892,
    specs: {
      Тип: "TWS наушники",
      Драйверы: "Динамические",
      Шумоподавление: "Активное ANC",
      "Время работы": "6ч + 24ч в кейсе",
      Подключение: "Bluetooth 5.3",
      Влагозащита: "IPX4",
    },
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    price: 32990,
    category: "headphones",
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 654,
    specs: {
      Тип: "Накладные наушники",
      Драйверы: "30мм",
      Шумоподавление: "Активное ANC",
      "Время работы": "30 часов",
      Подключение: "Bluetooth 5.2",
      Вес: "250г",
    },
  },
  {
    id: 5,
    name: "MagSafe Зарядка",
    brand: "Apple",
    price: 4990,
    category: "accessories",
    image: "/placeholder.svg",
    rating: 4.4,
    reviews: 321,
    specs: {
      Тип: "Беспроводная зарядка",
      Мощность: "15W",
      Совместимость: "iPhone 12+",
      Кабель: "USB-C 1м",
      Материал: "Алюминий",
      Размер: "9.5см диаметр",
    },
  },
  {
    id: 6,
    name: "Anker PowerBank 20K",
    brand: "Anker",
    price: 3990,
    originalPrice: 4990,
    category: "accessories",
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 567,
    specs: {
      Тип: "Портативная батарея",
      Емкость: "20000mAh",
      Выходы: "2x USB-A, 1x USB-C",
      "Быстрая зарядка": "PD 22.5W",
      Вес: "490г",
      Размер: "15.8×7.4×2.8см",
    },
  },
];

const Index = () => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const handleProductSelect = (productId: number) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getComparisonProducts = () => {
    return products.filter((product) => selectedProducts.includes(product.id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Smartphone" className="text-white" size={18} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">TECH GADGETS</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Смартфоны
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Наушники
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Аксессуары
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Блог
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Search" size={16} />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ShoppingCart" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Лучшие гаджеты 2024</h2>
          <p className="text-xl mb-8 text-blue-100">
            Сравнивайте характеристики и выбирайте идеальные устройства
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Icon name="ShoppingBag" className="mr-2" size={20} />
              Каталог товаров
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Icon name="BarChart3" className="mr-2" size={20} />
              Сравнить товары
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">
              Каталог товаров
            </h3>
            {selectedProducts.length > 0 && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Icon name="BarChart3" className="mr-2" size={18} />
                    Сравнить ({selectedProducts.length})
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>Сравнение товаров</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Характеристика</TableHead>
                          {getComparisonProducts().map((product) => (
                            <TableHead key={product.id} className="text-center">
                              <div className="flex flex-col items-center space-y-2">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-16 h-16 object-cover rounded"
                                />
                                <div>
                                  <div className="font-semibold">
                                    {product.name}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {product.brand}
                                  </div>
                                </div>
                              </div>
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Цена</TableCell>
                          {getComparisonProducts().map((product) => (
                            <TableCell key={product.id} className="text-center">
                              <div className="font-bold text-lg">
                                {formatPrice(product.price)}
                              </div>
                              {product.originalPrice && (
                                <div className="text-sm text-gray-500 line-through">
                                  {formatPrice(product.originalPrice)}
                                </div>
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Рейтинг</TableCell>
                          {getComparisonProducts().map((product) => (
                            <TableCell key={product.id} className="text-center">
                              <div className="flex items-center justify-center space-x-1">
                                <Icon
                                  name="Star"
                                  className="text-yellow-500 fill-current"
                                  size={16}
                                />
                                <span className="font-medium">
                                  {product.rating}
                                </span>
                                <span className="text-sm text-gray-500">
                                  ({product.reviews})
                                </span>
                              </div>
                            </TableCell>
                          ))}
                        </TableRow>
                        {Object.keys(
                          getComparisonProducts()[0]?.specs || {},
                        ).map((spec) => (
                          <TableRow key={spec}>
                            <TableCell className="font-medium">
                              {spec}
                            </TableCell>
                            {getComparisonProducts().map((product) => (
                              <TableCell
                                key={product.id}
                                className="text-center"
                              >
                                {product.specs[spec] || "—"}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>

          <Tabs
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="mb-8"
          >
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">Все товары</TabsTrigger>
              <TabsTrigger value="smartphones">Смартфоны</TabsTrigger>
              <TabsTrigger value="headphones">Наушники</TabsTrigger>
              <TabsTrigger value="accessories">Аксессуары</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="hover:shadow-lg transition-shadow duration-200"
              >
                <CardHeader className="pb-3">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="absolute top-2 right-2 flex space-x-2">
                      {product.originalPrice && (
                        <Badge variant="destructive" className="bg-red-500">
                          -
                          {Math.round(
                            (1 - product.price / product.originalPrice) * 100,
                          )}
                          %
                        </Badge>
                      )}
                      <div className="flex items-center space-x-1">
                        <Checkbox
                          id={`product-${product.id}`}
                          checked={selectedProducts.includes(product.id)}
                          onCheckedChange={() =>
                            handleProductSelect(product.id)
                          }
                          className="bg-white"
                        />
                        <label
                          htmlFor={`product-${product.id}`}
                          className="text-xs bg-white px-2 py-1 rounded text-gray-700"
                        >
                          Сравнить
                        </label>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {product.brand}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon
                        name="Star"
                        className="text-yellow-500 fill-current"
                        size={16}
                      />
                      <span className="text-sm font-medium">
                        {product.rating}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {Object.entries(product.specs)
                      .slice(0, 3)
                      .map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-gray-600">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Icon name="ShoppingCart" className="mr-2" size={16} />В
                      корзину
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">TECH GADGETS</h4>
              <p className="text-gray-400">Лучшие технологии для вашей жизни</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Смартфоны
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Наушники
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Аксессуары
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Гарантия
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>8 (800) 123-45-67</li>
                <li>info@techgadgets.ru</li>
                <li>Москва, ул. Технологическая, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tech Gadgets. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
