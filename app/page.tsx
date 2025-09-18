"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  TrendingUp,
  TrendingDown,
  Bot,
  Shield,
  Activity,
  DollarSign,
  Target,
  AlertTriangle,
  CheckCircle,
  Brain,
  BarChart3,
  Settings,
  Zap,
  Globe,
  Mail,
  Smartphone,
  TrendingUpIcon,
  RefreshCw,
} from "lucide-react"

export default function TradingDashboard() {
  const [botStatus, setBotStatus] = useState<"running" | "stopped" | "paused">("running")
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const tradingPairs = [
    { symbol: "BTCUSDT", price: 43250.5, change: 2.34, volume: "1.2B" },
    { symbol: "ETHUSDT", price: 2650.75, change: -1.12, volume: "890M" },
    { symbol: "SOLUSDT", price: 98.45, change: 4.67, volume: "245M" },
  ]

  const performanceMetrics = {
    hourlyTarget: 0.5,
    dailyTarget: 5.0,
    currentHourly: 0.73,
    currentDaily: 3.2,
    successRate: 74.5,
    totalTrades: 127,
    winningTrades: 95,
    riskPerTrade: 3.0,
    maxPositions: 5,
    currentPositions: 3,
  }

  const aiConsensus = {
    chatgpt: { signal: "BUY", confidence: 85, reasoning: "Bullish momentum with RSI oversold recovery" },
    deepseek: { signal: "BUY", confidence: 78, reasoning: "Volume surge indicates institutional interest" },
    consensus: "STRONG BUY",
  }

  const technicalIndicators = {
    rsi: 34.2,
    macd: { value: 0.0045, signal: "BULLISH" },
    bb: { position: "LOWER_BAND", signal: "OVERSOLD" },
    atr: 1250.3,
    ema20: 42890.5,
    ema50: 41750.25,
  }

  const mlPredictions = {
    nextHourPrice: 43580.2,
    confidence: 87.3,
    accuracy: 85.7,
    trend: "BULLISH",
    features: ["Price", "Volume", "RSI", "MACD", "Bollinger", "ATR", "Momentum"],
  }

  const backtestResults = {
    sharpeRatio: 2.34,
    maxDrawdown: -8.2,
    winRate: 74.5,
    totalReturn: 127.8,
    lastUpdate: "6h ago",
    status: "OPTIMIZED",
  }

  const exchanges = [
    { name: "Binance", status: "connected", spread: 0.02, volume: "1.2B" },
    { name: "Bybit", status: "connected", spread: 0.03, volume: "890M" },
    { name: "OKX", status: "connected", spread: 0.025, volume: "650M" },
    { name: "KuCoin", status: "maintenance", spread: 0.04, volume: "420M" },
  ]

  const notifications = {
    emailsSent: 23,
    pushNotifications: 45,
    criticalAlerts: 2,
    dailyReports: 1,
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Bot className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold text-primary">BotBolt</h1>
                <Badge variant="outline" className="bg-gradient-to-r from-cyan-500 to-amber-500 text-white border-0">
                  <Zap className="h-3 w-3 mr-1" />
                  SUPERINTELIGÊNCIA
                </Badge>
              </div>
              <Badge variant={botStatus === "running" ? "default" : "secondary"}>
                {botStatus === "running" ? "ATIVO" : "PARADO"}
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">{currentTime.toLocaleTimeString("pt-BR")}</div>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Configurações
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Previsão ML</CardTitle>
                <Brain className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">${mlPredictions.nextHourPrice.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Confiança: {mlPredictions.confidence}%</p>
                <Badge variant="outline" className="mt-2">
                  {mlPredictions.trend}
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Precisão ML</CardTitle>
                <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{mlPredictions.accuracy}%</div>
                <p className="text-xs text-muted-foreground">Modelo LSTM</p>
                <Progress value={mlPredictions.accuracy} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sharpe Ratio</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{backtestResults.sharpeRatio}</div>
                <p className="text-xs text-muted-foreground">Backtest: {backtestResults.lastUpdate}</p>
                <Badge variant="default" className="mt-2">
                  {backtestResults.status}
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Exchanges</CardTitle>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">
                  {exchanges.filter((e) => e.status === "connected").length}/4
                </div>
                <p className="text-xs text-muted-foreground">Conectadas</p>
                <Badge variant="outline" className="mt-2">
                  ARBITRAGEM
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Notificações</CardTitle>
                <Mail className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">
                  {notifications.emailsSent + notifications.pushNotifications}
                </div>
                <p className="text-xs text-muted-foreground">Hoje</p>
                <Badge variant="destructive" className="mt-2">
                  {notifications.criticalAlerts} CRÍTICOS
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Performance Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Meta Horária</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{performanceMetrics.currentHourly}%</div>
                <p className="text-xs text-muted-foreground">Meta: {performanceMetrics.hourlyTarget}%</p>
                <Progress
                  value={(performanceMetrics.currentHourly / performanceMetrics.hourlyTarget) * 100}
                  className="mt-2"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Meta Diária</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{performanceMetrics.currentDaily}%</div>
                <p className="text-xs text-muted-foreground">Meta: {performanceMetrics.dailyTarget}%</p>
                <Progress
                  value={(performanceMetrics.currentDaily / performanceMetrics.dailyTarget) * 100}
                  className="mt-2"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Taxa de Sucesso</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{performanceMetrics.successRate}%</div>
                <p className="text-xs text-muted-foreground">
                  {performanceMetrics.winningTrades}/{performanceMetrics.totalTrades} trades
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Posições Ativas</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{performanceMetrics.currentPositions}</div>
                <p className="text-xs text-muted-foreground">Máx: {performanceMetrics.maxPositions}</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Status Multi-Exchange
              </CardTitle>
              <CardDescription>Arbitragem automática entre exchanges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {exchanges.map((exchange) => (
                  <div key={exchange.name} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{exchange.name}</h3>
                      <Badge variant={exchange.status === "connected" ? "default" : "secondary"}>
                        {exchange.status === "connected" ? "CONECTADO" : "MANUTENÇÃO"}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Spread:</span>
                        <span className="font-medium">{exchange.spread}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Volume:</span>
                        <span className="font-medium">{exchange.volume}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Trading Pairs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Pares de Trading
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tradingPairs.map((pair) => (
                  <div key={pair.symbol} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{pair.symbol}</h3>
                      <Badge variant={pair.change > 0 ? "default" : "destructive"}>
                        {pair.change > 0 ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 mr-1" />
                        )}
                        {pair.change > 0 ? "+" : ""}
                        {pair.change}%
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold mb-1">${pair.price.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Volume: {pair.volume}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Consenso da IA + ML
                </CardTitle>
                <CardDescription>ChatGPT + DeepSeek + LSTM Model</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Consenso: {aiConsensus.consensus}</strong>
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <div className="font-medium">ChatGPT</div>
                        <div className="text-sm text-muted-foreground">{aiConsensus.chatgpt.reasoning}</div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{aiConsensus.chatgpt.signal}</Badge>
                        <div className="text-sm text-muted-foreground">{aiConsensus.chatgpt.confidence}%</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <div className="font-medium">DeepSeek</div>
                        <div className="text-sm text-muted-foreground">{aiConsensus.deepseek.reasoning}</div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{aiConsensus.deepseek.signal}</Badge>
                        <div className="text-sm text-muted-foreground">{aiConsensus.deepseek.confidence}%</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded bg-muted/50">
                      <div>
                        <div className="font-medium">LSTM Model</div>
                        <div className="text-sm text-muted-foreground">
                          7 features: {mlPredictions.features.join(", ")}
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="default">{mlPredictions.trend}</Badge>
                        <div className="text-sm text-muted-foreground">{mlPredictions.confidence}%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="h-5 w-5" />
                  Backtesting Automático
                </CardTitle>
                <CardDescription>Execução a cada 6 horas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Sharpe Ratio</span>
                      <span className="font-medium">{backtestResults.sharpeRatio}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Max Drawdown</span>
                      <span className="font-medium text-red-500">{backtestResults.maxDrawdown}%</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Win Rate</span>
                      <span className="font-medium">{backtestResults.winRate}%</span>
                    </div>
                    <Progress value={backtestResults.winRate} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Total Return</span>
                      <span className="font-medium text-green-500">+{backtestResults.totalReturn}%</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Última Otimização</span>
                    <Badge variant="default">{backtestResults.status}</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{backtestResults.lastUpdate}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Indicators */}
          <Card>
            <CardHeader>
              <CardTitle>Indicadores Técnicos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">RSI (14)</span>
                    <span className="font-medium">{technicalIndicators.rsi}</span>
                  </div>
                  <Progress value={technicalIndicators.rsi} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">MACD</span>
                    <Badge variant={technicalIndicators.macd.signal === "BULLISH" ? "default" : "destructive"}>
                      {technicalIndicators.macd.signal}
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">Valor: {technicalIndicators.macd.value}</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Bollinger</span>
                    <Badge variant="outline">{technicalIndicators.bb.signal}</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">{technicalIndicators.bb.position}</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">ATR</span>
                    <span className="font-medium">{technicalIndicators.atr}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">EMA 20</span>
                    <span className="font-medium">${technicalIndicators.ema20.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">EMA 50</span>
                    <span className="font-medium">${technicalIndicators.ema50.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Sistema de Notificações
                </CardTitle>
                <CardDescription>Email + Push notifications em tempo real</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Emails Enviados</span>
                      <span className="font-medium">{notifications.emailsSent}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Push Notifications</span>
                      <span className="font-medium">{notifications.pushNotifications}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Alertas Críticos</span>
                      <Badge variant="destructive">{notifications.criticalAlerts}</Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Relatórios Diários</span>
                      <span className="font-medium">{notifications.dailyReports}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  API Mobile
                </CardTitle>
                <CardDescription>Dashboard otimizado para dispositivos móveis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Status da API</span>
                    <Badge variant="default">ATIVA</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Conexões Ativas</span>
                    <span className="font-medium">3</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Dados Otimizados</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Controles Remotos</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Risk Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Gestão de Risco
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Risco por Trade</span>
                    <span className="font-medium">{performanceMetrics.riskPerTrade}%</span>
                  </div>
                  <Progress value={performanceMetrics.riskPerTrade * 10} className="h-2" />
                  <div className="text-xs text-muted-foreground">Limite: 3% do capital</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Stop-loss</span>
                    <span className="font-medium">2x ATR</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Dinâmico baseado em volatilidade</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Take-profit</span>
                    <span className="font-medium">4x ATR</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Escalonado em múltiplos níveis</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Status de Segurança
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Criptografia API</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Rate Limiting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">SSL/TLS</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">IP Whitelist</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
